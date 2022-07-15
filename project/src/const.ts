export enum AppRoute {
  Main = '/',
  MainEmpty = '/empty',
  Offer = '/offer',
  OfferId = ':id',
  OfferNotLogged = '/offer-not-logged',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', // будет задействована при запросе данных с сервера
}

// пока в приложении нет логики авторизации, здесь можно явно задать состояние
export const isGuest = true;
