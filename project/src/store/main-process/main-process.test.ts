import {mainProcess} from './main-process';
import {changeCity, clickSort} from './main-process';

const state = {
  offers: [],
  activeCity: 'Paris',
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
    const newState = {
      offers: [],
      activeCity: 'Hamburg',
      sortBy: 'Popular',
      isSortListCollapsed: true,
      isOffersLoading: false,
      isOffersLoaded: false,
    };

    expect(mainProcess.reducer(state, changeCity({city: 'Hamburg'})))
      .toEqual(newState);
  });

  it('Should invert isSortListCollapsed', () => {
    const newState = {
      offers: [],
      activeCity: 'Paris',
      sortBy: 'Popular',
      isSortListCollapsed: false,
      isOffersLoading: false,
      isOffersLoaded: false,
    };

    expect(mainProcess.reducer(state, clickSort()))
      .toEqual(newState);
  });
});
