export const REVIEW_LENGTH = 10;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum AppRoute {
  Main = '/',
  MainEmpty = '/empty',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login',
  // OfferNotLogged = '/offer-not-logged',
  Offer = '/offer',
  OfferId = '/offer/:id',
  NotFound = '/not-found-screen'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferType {
  Apartment = 'Apartment',
  Hotel = 'Hotel',
  House = 'House',
  Room = 'Private Room',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const offerSorts = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}
