import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {saveToken, dropToken} from '../services/token';

import {
  requireAuthorization,
  changeSort,
  loadOffers,
  loadOffer,
  loadComments,
  loadOffersNear,
  createComment
} from './action';

import {AppDispatch, State} from '../types/state';
import {Offer, Offers, CommentNew, Comments} from '../types/offers';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

import {APIRoute, AuthorizationStatus} from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, {dispatch, getState, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(changeSort({sort: getState().sortBy}));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffer',
  async (offerId, {dispatch, getState, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Offers.concat('/', offerId));
    dispatch(loadOffer(data));
  },
);

export const fetchOffersNearAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffersNear',
  async (offerId, {dispatch, getState, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers.concat('/', offerId, '/nearby'));
    dispatch(loadOffersNear(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchComments',
  async (offerId, {dispatch, getState, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments.concat('/', offerId));
    dispatch(loadComments(data));
  },
);

export const fetchCreateCommentAction = createAsyncThunk<void, CommentNew, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchCreateComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comments>(APIRoute.Comments.concat('/', offerId.toString()), {comment, rating});
    dispatch(createComment(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/isAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
