// пока в приложении нет логики авторизации, здесь можно явно задать состояние
export const isGuest = false;

// количество элементов в блоке «Список предложений неподалёку»
export const OFFERS_NEAR = 3;

export const REVIEW_LENGTH = 10;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', // будет задействована при запросе данных с сервера
}

export enum OfferType {
  Apartment = 'Apartment',
  Hotel = 'Hotel',
  House = 'House',
  Room = 'Private Room',
}

export const offerSorts = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];
