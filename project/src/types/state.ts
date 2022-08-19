import {store} from '../store';

import {Offer, Offers, Comments} from './offers';

import {AuthorizationStatus} from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  email: string,
};

export type MainProcess = {
  offers: Offers;
  activeCity: string;
  sortBy: string;
  isSortListCollapsed: boolean;
  isOffersLoading: boolean, // сейчас загрузка?
  areOffersLoaded: boolean, // уже загружено?
};

export type OfferData = {
  offer: Offer | null;
  offersNear: Offers;
  comments: Comments;
  isError404: boolean;
  isOfferLoading: boolean,
  isOfferLoaded: boolean,
};

export type FavoriteData = {
  favorites: Offers;
  isError401: boolean;
  isFavoritesLoading: boolean,
  isFavoritesLoaded: boolean, // уже загружено?
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
