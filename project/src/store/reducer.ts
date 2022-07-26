import {createReducer} from '@reduxjs/toolkit';

import {
  changeCity,
  loadOffers,
  loadPoints,
  clickSort,
  changeSort,
  collapseSortList
} from './action';

import {
  lowToHigh,
  highToLow,
  topRated
} from '../utils';

import {Offers} from '../types/offers';
import {Points} from '../types/map';

import {offerSorts} from '../const';

import {cityOffers} from '../mocks/offers';
import {cityPoints} from '../mocks/map/points';

const [Popular, LowToHigh, HighToLow, TopRated] = offerSorts;

const initialState = {
  activeCity: 'Paris',
  offers: cityOffers['Paris'] as Offers,
  points: cityPoints['Paris'] as Points,
  sortBy: Popular,
  isSortListCollapsed: true
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload.city;
      state.offers = [];
    })
    // отбираем из массива всех предложений те, что соответствуют выбранному городу
    .addCase(loadOffers, (state) => {
      state.offers = cityOffers[state.activeCity] || [];
    })
    // отбираем маркеры для карты, соответствующие выбранному городу
    .addCase(loadPoints, (state) => {
      state.points = cityPoints[state.activeCity] || [];
    })
    .addCase(clickSort, (state) => {
      state.isSortListCollapsed = !state.isSortListCollapsed;
    })
    .addCase(collapseSortList, (state) => {
      state.isSortListCollapsed = true;
    })
    .addCase(changeSort, (state, action) => {
      const {offers} = state;
      const {sort} = action.payload;
      state.sortBy = sort;
      state.isSortListCollapsed = true;

      switch (sort) {
        case LowToHigh:
          state.offers = lowToHigh(offers);
          break;
        case HighToLow:
          state.offers = highToLow(offers);
          break;
        case TopRated:
          state.offers = topRated(offers);
          break;

        default:
          state.offers = cityOffers[state.activeCity] || [];
          break;
      }
    });
});

export {reducer};
