import {createSlice} from '@reduxjs/toolkit';

import {
  fetchOffer,
  fetchLoadOffersNear,
  fetchLoadComments,
  fetchCreateComment
} from '../api-actions';

import {arrayToMap} from '../../utils';

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
  reducers: {
    setFavoriteStatus: ({offer}) => {
      offer && (offer.isFavorite = !offer.isFavorite);
    },
    setOffersNearFavoriteStatus: (state, {payload: {favorites}}) => {
      const _favorites = arrayToMap(favorites, 'id');

      state.offersNear.forEach((offer) => {
        offer.isFavorite = !!_favorites[offer.id];
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isError404 = false;
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, {payload}) => {
        state.offer = payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isError404 = true;
        state.isOfferLoading = false;
      })

      .addCase(fetchLoadOffersNear.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchLoadOffersNear.fulfilled, (state, {payload}) => {
        state.offersNear = payload || [];
        state.isOfferLoading = false;
      })

      .addCase(fetchLoadComments.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchLoadComments.fulfilled, (state, {payload}) => {
        state.comments = payload || [];
        state.isOfferLoading = false;
      })

      .addCase(fetchCreateComment.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchCreateComment.fulfilled, (state, {payload}) => {
        state.comments = payload || [];
        state.isOfferLoading = false;
      });
  }
});

export const {setFavoriteStatus, setOffersNearFavoriteStatus} = offerData.actions;
