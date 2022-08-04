import {createSlice} from '@reduxjs/toolkit';

import {
  fetchFavoritesAction,
  fetchFavoriteStatusAction
} from '../api-actions';

import {FavoriteData} from '../../types/state';

import {NameSpace} from '../../const';

const initialState: FavoriteData = {
  favorites: [],
  isFavoritesLoading: false,
  isFavoritesLoaded: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
        state.isFavoritesLoaded = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, {payload}) => {
        state.favorites = payload;
        state.isFavoritesLoading = false;
        state.isFavoritesLoaded = true;
      })

      .addCase(fetchFavoriteStatusAction.fulfilled, (state, {payload: {data, offerStatus}}) => {
        offerStatus
          ? state.favorites.push(data)
          : state.favorites = state.favorites.filter((offer) => offer.id !== data.id);
      });
  }
});
