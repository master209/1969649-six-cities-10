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
  isLoading: boolean, // сейчас загрузка?
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
