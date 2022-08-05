import {State} from '../../types/state';
import {Offers} from '../../types/offers';

import {NameSpace} from '../../const';

export const getFavorites = (state: State): Offers => state[NameSpace.Favorite].favorites;
export const getIsFavoriteLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoritesLoading;
export const getIsFavoritesLoaded = (state: State): boolean => state[NameSpace.Favorite].isFavoritesLoaded;
