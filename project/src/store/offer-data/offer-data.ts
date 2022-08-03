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
  isError404: false,
  isOfferLoading: false,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isError404 = false;
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, {payload}) => {
        state.offer = payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isError404 = true;
        state.isOfferLoading = false;
      })

      .addCase(fetchOffersNearAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffersNearAction.fulfilled, (state, {payload}) => {
        state.offersNear = payload || [];
        state.isOfferLoading = false;
      })

      .addCase(fetchCommentsAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, {payload}) => {
        state.comments = payload || [];
        state.isOfferLoading = false;
      })

      .addCase(fetchCreateCommentAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchCreateCommentAction.fulfilled, (state, {payload}) => {
        state.comments = payload || [];
        state.isOfferLoading = false;
      });
  }
});
