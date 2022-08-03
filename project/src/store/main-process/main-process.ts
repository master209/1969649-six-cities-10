import {createSlice} from '@reduxjs/toolkit';

import {fetchOffersAction} from '../api-actions';

import {sortTo} from '../../utils';

import {Offers} from '../../types/offers';

import {MainProcess} from '../../types/state';

import {NameSpace, offerSorts, Order} from '../../const';

const [Popular, LowToHigh, HighToLow, TopRated] = offerSorts;

const initialState: MainProcess = {
  offers: [],
  activeCity: 'Paris',
  sortBy: Popular,
  isSortListCollapsed: true,
  isOffersLoading: false,
  isOffersLoaded: false,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, {payload: {city}}) => {
      state.activeCity = city;
      state.offers = [];
    },
    clickSort: (state) => {
      state.isSortListCollapsed = !state.isSortListCollapsed;
    },
    collapseSortList: (state) => {
      state.isSortListCollapsed = true;
    },
    changeSort: (state, {payload: {sort}}) => {
      const {offers} = state;
      state.sortBy = sort;
      state.isSortListCollapsed = true;

      switch (sort) {
        case LowToHigh:
          state.offers = sortTo(offers, 'price', Order.Asc);
          break;
        case HighToLow:
          state.offers = sortTo(offers, 'price');
          break;
        case TopRated:
          state.offers = sortTo(offers, 'rating');
          break;

        default:
          // state.offers = offers.filter(({city}) => (city.name === activeCity)) || [];
          break;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.isOffersLoaded = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, {payload: {data, activeCity}}) => {
        const offers: Offers = data;
        state.offers = offers.filter(({city}) => (city.name === activeCity)) || [];
        state.isOffersLoading = false;
        state.isOffersLoaded = true;
      });
  }
});


export const {changeCity, clickSort, collapseSortList, changeSort} = mainProcess.actions;
