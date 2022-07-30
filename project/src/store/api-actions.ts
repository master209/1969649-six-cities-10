import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {changeSort, loadOffers} from './action';

import {AppDispatch, State} from '../types/state.js';
import {Offers} from '../types/offers';

import {APIRoute} from '../const';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
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

