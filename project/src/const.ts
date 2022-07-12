export enum AppRoute {
  Main = '/',
  MainEmpty = '/empty',
  Room = '/offer/:id',
  RoomNotLogged = '/offer-not-logged',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login'
}

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  // Unknown = 'UNKNOWN',   // будет задействована при запросе данных с сервера
};
