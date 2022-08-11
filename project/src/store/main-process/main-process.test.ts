import {mainProcess, changeCity, clickSort} from './main-process';

import {fetchLoadOffers} from '../api-actions';

import {makeFakeOffers} from '../../utils';

const mockOffers = makeFakeOffers();
const activeCity = 'Paris';

const state = {
  offers: [],
  activeCity,
  sortBy: 'Popular',
  isSortListCollapsed: true,
  isOffersLoading: false,
  isOffersLoaded: false,
};

describe('Reducer: mainProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('Should return changed city', () => {
    const resultState = {...state, activeCity: 'Hamburg'};

    expect(mainProcess.reducer(state, changeCity({city: 'Hamburg'})))
      .toEqual(resultState);
  });

  it('Should return inverted isSortListCollapsed', () => {
    const resultState = {...state, isSortListCollapsed: false};

    expect(mainProcess.reducer(state, clickSort()))
      .toEqual(resultState);
  });

  it('should update offers by load offers', () => {
    const offers = mockOffers.filter(({city}) => (city.name === activeCity)) || [];
    const resultState = {...state, offers, isOffersLoaded: true};

    expect(mainProcess.reducer(state, {type: fetchLoadOffers.fulfilled.type, payload: {activeCity, data: mockOffers}}))
      .toEqual(resultState);
  });
});
