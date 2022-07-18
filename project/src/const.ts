export enum AppRoute {
  Main = '/',
  MainEmpty = '/empty',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login',
  OfferNotLogged = '/offer-not-logged',
  Offer = '/offer',
  OfferId = ':id',
  NotFound = '/not-found-screen'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', // будет задействована при запросе данных с сервера
}

// пока в приложении нет логики авторизации, здесь можно явно задать состояние
export const isGuest = false;

export const REVIEW_LENGTH = 10;
