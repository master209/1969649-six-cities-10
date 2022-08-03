import {createSlice} from '@reduxjs/toolkit';

import {
  fetchFavoritesAction,
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
      });
  }
});
