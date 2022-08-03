import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {saveToken, dropToken} from '../services/token';

import {AppDispatch, State} from '../types/state';
import {Offer, Offers, CommentNew, Comments} from '../types/offers';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

import {APIRoute} from '../const';

export const fetchOffersAction = createAsyncThunk<{activeCity: string, data: Offers}, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Main/fetchOffers',
  async (activeCity, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return {activeCity, data};
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Offer/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Offers.concat('/', offerId));
    return data;
  },
);

export const fetchOffersNearAction = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Offer/fetchOffersNear',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers.concat('/', offerId, '/nearby'));
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Offer/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments.concat('/', offerId));
    return data;
  },
);

export const fetchCreateCommentAction = createAsyncThunk<Comments, CommentNew, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Offer/fetchCreateComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comments>(APIRoute.Comments.concat('/', offerId.toString()), {comment, rating});
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Favorite/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'User/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'User/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'User/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
