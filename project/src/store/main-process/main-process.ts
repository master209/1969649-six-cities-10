import {createSlice} from '@reduxjs/toolkit';

import {fetchLoadOffers} from '../api-actions/api-actions';

import {sortTo, convertArrayToMap} from '../../utils';

import {Offers} from '../../types/offers';
import {MainProcess} from '../../types/state';

import {initialCity, NameSpace, offerSorts, Order} from '../../const';

const [Popular, LowToHigh, HighToLow, TopRated] = offerSorts;

const initialState: MainProcess = {
  offers: [],
  activeCity: initialCity,
  sortBy: Popular,
  isSortListCollapsed: true,
  isOffersLoading: false,
  areOffersLoaded: false,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, {payload: {city}}) => {
      if (state.activeCity !== city) {
        state.activeCity = city;
        state.offers = [];
      }
    },
    setOffersFavoriteStatus: (state, {payload: {favorites}}) => {
      const _favorites = convertArrayToMap(favorites, 'id');

      state.offers.forEach((offer) => {
        offer.isFavorite = !!_favorites[offer.id];
      });
    },

    clickSort: (state) => {
      state.isSortListCollapsed = !state.isSortListCollapsed;
    },
    collapseSortList: (state) => {
      state.isSortListCollapsed = true;
    },
    setSort: (state, {payload: sort}) => {
      const {offers} = state;
      sort = sort ? sort : state.sortBy;
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
          state.offers = sortTo(offers, 'id', Order.Asc);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoadOffers.pending, (state) => {
        state.isOffersLoading = true;
        state.areOffersLoaded = false;
      })
      .addCase(fetchLoadOffers.fulfilled, (state, {payload: {activeCity, data}}) => {
        const offers: Offers = data;
        state.offers = offers.filter(({city}) => (city.name === activeCity)) || [];
        state.isOffersLoading = false;
        state.areOffersLoaded = true;
      })
      .addCase(fetchLoadOffers.rejected, (state) => {
        state.isOffersLoading = false;
        state.areOffersLoaded = false;
      });
  }
});

export const {setOffersFavoriteStatus, changeCity, clickSort, collapseSortList, setSort} = mainProcess.actions;
