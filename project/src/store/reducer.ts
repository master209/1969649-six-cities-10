import {createReducer} from '@reduxjs/toolkit';

import {
  changeCity,
  loadOffers,
  clickSort,
  changeSort,
  collapseSortList
} from './action';

import {sortTo} from '../utils';

import {Offers} from '../types/offers';

import {offerSorts, Order} from '../const';

const [Popular, LowToHigh, HighToLow, TopRated] = offerSorts;

const initialState = {
  activeCity: 'Paris',
  offers: [] as Offers,
  sortBy: Popular,
  isSortListCollapsed: true,
  isLoading: false, // сейчас загрузка?
  isLoaded: false, // уже загружено?
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.isLoaded = false;
      state.activeCity = action.payload.city;
      state.offers = [];
    })
    // отбираем из массива всех предложений те, что соответствуют выбранному городу
    .addCase(loadOffers, (state,action) => {
      state.isLoading = true;
      state.offers = action.payload.filter(({city}) => (city.name === state.activeCity)) || [];
      state.isLoading = false;
      state.isLoaded = true;
    })
    .addCase(clickSort, (state) => {
      state.isSortListCollapsed = !state.isSortListCollapsed;
    })
    .addCase(collapseSortList, (state) => {
      state.isSortListCollapsed = true;
    })
    .addCase(changeSort, (state, action) => {
      const {sort} = action.payload;
      state.sortBy = sort;
      state.isSortListCollapsed = true;

      switch (sort) {
        case LowToHigh:
          state.offers = sortTo(state.offers, 'price', Order.Asc);
          break;
        case HighToLow:
          state.offers = sortTo(state.offers, 'price');
          break;
        case TopRated:
          state.offers = sortTo(state.offers, 'rating');
          break;

        default:
          state.offers = state.offers.filter(({city}) => (city.name === state.activeCity)) || [];
          break;
      }
    });
});

export {reducer};
