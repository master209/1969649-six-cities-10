import {State} from '../../types/state';
import {Offers} from '../../types/offers';

import {NameSpace} from '../../const';

export const getOffers = (state: State): Offers => state[NameSpace.Main].offers;
export const getActiveCity = (state: State): string => state[NameSpace.Main].activeCity;
export const getSortBy = (state: State): string => state[NameSpace.Main].sortBy;
export const getIsSortListCollapsed = (state: State): boolean => state[NameSpace.Main].isSortListCollapsed;
export const getIsOffersLoading = (state: State): boolean => state[NameSpace.Main].isOffersLoading;
export const getIsOffersLoaded = (state: State): boolean => state[NameSpace.Main].areOffersLoaded;
