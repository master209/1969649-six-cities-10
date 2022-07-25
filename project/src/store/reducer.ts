import {createReducer} from '@reduxjs/toolkit';

import {
  changeCity,
  loadOffers,
  loadPoints
} from './action';

import {Offers} from '../types/offers';
import {Points} from '../types/map';

import {cityOffers} from '../mocks/offers';
import {cityPoints} from '../mocks/map/points';

const initialState = {
  activeCity: 'Paris',
  offers: cityOffers['Paris'] as Offers,
  points: cityPoints['Paris'] as Points
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
    });
});

export {reducer};
