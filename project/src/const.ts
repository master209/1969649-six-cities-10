export const MIN_COMMENT_LENGTH = 10;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum AppRoute {
  Main = '/',
  MainEmpty = '/empty',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login',
  Offer = '/offer',
  OfferId = '/offer/:id',
  NotFound = '/not-found-screen'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
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
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  User = 'USER',
  Main = 'MAIN',
  Offer = 'OFFER',
  Favorite = 'FAVORITE',
}
