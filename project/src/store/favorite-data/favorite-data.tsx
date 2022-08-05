import {createSlice} from '@reduxjs/toolkit';

import {
  fetchFavoritesAction,
  fetchFavoriteStatusAction
} from '../api-actions';

import {FavoriteData} from '../../types/state';

import {NameSpace} from '../../const';

const initialState: FavoriteData = {
  favorites: [],
  isError401: false, // авторизаван?
  isFavoritesLoading: false,
  isFavoritesLoaded: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state, {payload}) => {
        state.isError401 = false;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, {payload}) => {
        state.favorites = payload;
        state.isFavoritesLoading = false;
        state.isFavoritesLoaded = true;
      })

      .addCase(fetchFavoriteStatusAction.fulfilled, (state, {payload: {data, offerStatus}}) => {
        offerStatus
          ? state.favorites.push(data)
          : state.favorites = state.favorites.filter(({id}) => id !== data.id);
      })
      .addCase(fetchFavoriteStatusAction.rejected, (state) => {
        state.isError401 = true;
      });
  }
});
