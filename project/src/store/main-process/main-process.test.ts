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
    const resultState = {...state, activeCity: 'Hamburg'};

    expect(mainProcess.reducer(state, changeCity({city: 'Hamburg'})))
      .toEqual(resultState);
  });

  it('Should return inverted isSortListCollapsed', () => {
    const resultState = {...state, isSortListCollapsed: false};

    expect(mainProcess.reducer(state, clickSort()))
      .toEqual(resultState);
  });
});
