import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {saveToken, dropToken} from '../services/token';
import {saveEmail, dropEmail} from '../services/email';

import {AppDispatch, State} from '../types/state';
import {Offer, Offers, CommentNew, Comments} from '../types/offers';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

import {APIRoute} from '../const';

export const fetchLoadOffers = createAsyncThunk<{activeCity: string, data: Offers}, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Main/fetchLoadOffers',
  async (activeCity, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return {activeCity, data};
  },
);

export const fetchOffer = createAsyncThunk<Offer, string, {
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

export const fetchLoadOffersNear = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Offer/fetchLoadOffersNear',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers.concat('/', offerId, '/nearby'));
    return data;
  },
);

export const fetchLoadComments = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Offer/fetchLoadComments',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments.concat('/', offerId));
    return data;
  },
);

export const fetchCreateComment = createAsyncThunk<Comments, CommentNew, {
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

export const fetchLoadFavorites = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Favorite/fetchLoadFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    return data;
  },
);

export const fetchFavoriteStatus = createAsyncThunk<{data: Offer, offerStatus: number}, {offerId: number, offerStatus: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'Favorite/fetchFavoriteStatus',
  async ({offerId, offerStatus}, {dispatch, extra: api}) => {
    const {data} = await api.post<Offer>(APIRoute.Favorite.concat('/', offerId.toString(), '/', offerStatus.toString()));
    return {data, offerStatus};
  },
);

export const fetchCheckAuth = createAsyncThunk<{email: string}, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'User/fetchCheckAuth',
  async (email, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
    saveEmail(email);
    return {email};
  },
);

export const fetchLogin = createAsyncThunk<{email: string}, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'User/fetchLogin',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    saveEmail(email);
    return {email};
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'User/fetchLogout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropEmail();
  },
);
