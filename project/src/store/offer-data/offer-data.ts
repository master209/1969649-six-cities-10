import {createSlice} from '@reduxjs/toolkit';

import {
  fetchOfferAction,
  fetchOffersNearAction,
  fetchCommentsAction,
  fetchCreateCommentAction
} from '../api-actions';

import {OfferData} from '../../types/state';

import {NameSpace} from '../../const';

const initialState: OfferData = {
  offer: null,
  offersNear: [],
  comments: [],
  isLoading: false, // сейчас загрузка?
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, {payload}) => {
        state.offer = payload;
        state.isLoading = false;
      })

      .addCase(fetchOffersNearAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersNearAction.fulfilled, (state, {payload}) => {
        state.offersNear = payload || [];
        state.isLoading = false;
      })

      .addCase(fetchCommentsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, {payload}) => {
        state.comments = payload || [];
        state.isLoading = false;
      })

      .addCase(fetchCreateCommentAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCreateCommentAction.fulfilled, (state, {payload}) => {
        state.comments = payload || [];
        state.isLoading = false;
      });
  }
});
