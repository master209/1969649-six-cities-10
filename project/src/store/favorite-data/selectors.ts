import {State} from '../../types/state';
import {Offers} from '../../types/offers';

import {NameSpace} from '../../const';

export const getFavorites = (state: State): Offers => state[NameSpace.Favorite].favorites;
export const getIsError401 = (state: State): boolean => state[NameSpace.Favorite].isError401;
export const getIsFavoritesLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoritesLoading;
export const getIsFavoritesLoaded = (state: State): boolean => state[NameSpace.Favorite].isFavoritesLoaded;
