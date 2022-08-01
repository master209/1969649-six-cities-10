import {createReducer} from '@reduxjs/toolkit';

import {
  requireAuthorization,
  changeCity,
  loadOffers,
  loadOffer,
  loadOffersNear,
  loadComments,
  createComment,
  clickSort,
  changeSort,
  collapseSortList
} from './action';

import {sortTo} from '../utils';

import {Offer, Offers, Comments} from '../types/offers';

import {AuthorizationStatus, offerSorts, Order} from '../const';

const [Popular, LowToHigh, HighToLow, TopRated] = offerSorts;

type InitalState = {
  authorizationStatus: AuthorizationStatus;
  activeCity: string;
  offers: Offers;
  offer: Offer | null;
  offersNear: Offers;
  comments: Comments;
  sortBy: string;
  isSortListCollapsed: boolean;
  isLoading: boolean;
  isLoaded: boolean;
}

const initialState: InitalState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  activeCity: 'Paris',
  offers: [],
  offer: null,
  offersNear: [],
  comments: [],
  sortBy: Popular,
  isSortListCollapsed: true,
  isLoading: false, // сейчас загрузка?
  isLoaded: false, // уже загружено?
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, {payload}) => {
      state.authorizationStatus = payload;
    })
    .addCase(changeCity, (state, {payload}) => {
      state.isLoaded = false;
      state.activeCity = payload.city;
      state.offers = [];
    })
    // отбираем из массива всех предложений те, что соответствуют выбранному городу
    .addCase(loadOffers, (state,{payload}) => {
      state.isLoading = true;
      state.offers = payload.filter(({city}) => (city.name === state.activeCity)) || [];
      state.isLoading = false;
      state.isLoaded = true;
    })
    .addCase(loadOffer, (state,{payload}) => {
      state.isLoading = true;
      state.offer = payload;
      state.isLoading = false;
    })
    .addCase(loadOffersNear, (state,{payload}) => {
      state.isLoading = true;
      state.offersNear = payload || [];
      state.isLoading = false;
    })
    .addCase(loadComments, (state,{payload}) => {
      state.isLoading = true;
      state.comments = payload || [];
      state.isLoading = false;
    })
    .addCase(createComment, (state,{payload}) => {
      state.isLoading = true;
      state.comments = state.comments.push(payload);
      state.isLoading = false;
    })
    .addCase(clickSort, (state) => {
      state.isSortListCollapsed = !state.isSortListCollapsed;
    })
    .addCase(collapseSortList, (state) => {
      state.isSortListCollapsed = true;
    })
    .addCase(changeSort, (state, {payload}) => {
      const {offers} = state;
      const {sort} = payload;
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
    });
});

export {reducer};
