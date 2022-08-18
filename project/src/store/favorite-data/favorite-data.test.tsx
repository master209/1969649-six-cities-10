import {favoriteData, resetFavorites} from './favorite-data';

import {fetchFavoriteStatus, fetchLoadFavorites} from '../api-actions';

import {makeFakeOffers} from '../../utils';

const mockFavorites = makeFakeOffers();

const state = {
  favorites: [],
  isError401: false,
  isFavoritesLoading: false,
  isFavoritesLoaded: false,
};

describe('Reducer: favoriteData', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoriteData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('resetFavorites should return initial state', () => {
    expect(favoriteData.reducer(state, resetFavorites()))
      .toEqual(state);
  });

  it('initial state must not be changed by resetFavorites', () => {
    const resultState = {...state, favorites: mockFavorites};

    expect(favoriteData.reducer(state, resetFavorites()))
      .not.toEqual(resultState);
  });

  it('should update favorites by load favorites', () => {
    const resultState = {...state, favorites: mockFavorites, isFavoritesLoaded: true};

    expect(favoriteData.reducer(state, {type: fetchLoadFavorites.fulfilled.type, payload: mockFavorites}))
      .toEqual(resultState);
  });

  it('should isError401 set true', () => {
    const resultState = {...state, isError401: true};

    expect(favoriteData.reducer(state, {type: fetchFavoriteStatus.rejected.type}))
      .toEqual(resultState);
  });
});
