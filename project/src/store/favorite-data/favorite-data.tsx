import {createSlice} from '@reduxjs/toolkit';

import {
  fetchLoadFavorites,
  fetchFavoriteStatus
} from '../api-actions/api-actions';

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
  reducers: {
    resetFavorites: (state) => {
      state.favorites = [];
      state.isFavoritesLoading = false;
      state.isFavoritesLoaded = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoadFavorites.pending, (state) => {
        state.isError401 = false;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchLoadFavorites.fulfilled, (state, {payload}) => {
        state.favorites = payload;
        state.isFavoritesLoading = false;
        state.isFavoritesLoaded = true;
      })
      .addCase(fetchLoadFavorites.rejected, (state) => {
        state.favorites = [];
        state.isFavoritesLoading = false;
        state.isFavoritesLoaded = true;
      })

      .addCase(fetchFavoriteStatus.fulfilled, (state, {payload: {data, offerStatus}}) => {
        const isNewFavorite = !state.favorites.find(({id}) => id === data.id);

        offerStatus
          ? isNewFavorite && state.favorites.push(data)
          : state.favorites = state.favorites.filter(({id}) => id !== data.id);
      })
      .addCase(fetchFavoriteStatus.rejected, (state) => {
        state.isError401 = true;
      });
  }
});

export const {resetFavorites} = favoriteData.actions;
