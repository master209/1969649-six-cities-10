import {store} from '../store';

import {Offer, Offers, Comments} from './offers';

import {AuthorizationStatus} from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type MainProcess = {
  offers: Offers;
  activeCity: string;
  sortBy: string;
  isSortListCollapsed: boolean;
  isOffersLoading: boolean, // сейчас загрузка?
  isOffersLoaded: boolean, // уже загружено?
};

export type OfferData = {
  offer: Offer | null;
  offersNear: Offers;
  comments: Comments;
  isError404: boolean;
  isOfferLoading: boolean,
};

export type FavoriteData = {
  favorites: Offers;
  isFavoritesLoading: boolean,
  isFavoritesLoaded: boolean, // уже загружено?
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
