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

      .addCase(fetchFavoriteStatusAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoriteStatusAction.fulfilled, (state, {payload: {data, offerStatus}}) => {
        state.isFavoritesLoading = false;

        let fav = state.favorites;

        offerStatus === 1
          ? state.favorites.push(data)
          : fav = state.favorites.filter((offer) => offer.id !== data.id);

        state.favorites = fav;
        /* eslint-disable-next-line no-console */
        console.log('fav, state.favorites: ', fav, state.favorites);
      });
  }
});
