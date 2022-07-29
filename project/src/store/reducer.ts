import {createReducer} from '@reduxjs/toolkit';

import {
  changeCity,
  loadOffers,
  clickSort,
  changeSort,
  collapseSortList
} from './action';

import {sortTo} from '../utils';

import {offerSorts, Order} from '../const';

import {offers} from '../mocks/offers';

const [Popular, LowToHigh, HighToLow, TopRated] = offerSorts;

const initialState = {
  activeCity: 'Paris',
  offers: offers,
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
      state.offers = offers.filter(({city}) => (city.name === state.activeCity)) || [];
    })
    .addCase(clickSort, (state) => {
      state.isSortListCollapsed = !state.isSortListCollapsed;
    })
    .addCase(collapseSortList, (state) => {
      state.isSortListCollapsed = true;
    })
    .addCase(changeSort, (state, action) => {
      const {offers: _offers} = state;
      const {sort} = action.payload;
      state.sortBy = sort;
      state.isSortListCollapsed = true;

      switch (sort) {
        case LowToHigh:
          state.offers = sortTo(_offers, 'price', Order.Asc);
          break;
        case HighToLow:
          state.offers = sortTo(_offers, 'price');
          break;
        case TopRated:
          state.offers = sortTo(_offers, 'rating');
          break;

        default:
          state.offers = _offers.filter(({city}) => (city.name === state.activeCity)) || [];
          break;
      }
    });
});

export {reducer};
