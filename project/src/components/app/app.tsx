import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoute} from '../../const';
import {
  MainScreen,
  MainEmptyScreen,
  RoomScreen,
  RoomNotLoggedScreen,
  FavoritesScreen,
  FavoritesEmptyScreen,
  AuthScreen,
  NotFoundScreen,
} from '../../pages';

type AppProps = {
  placesFound: number;
};

function App({placesFound}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesFound={placesFound} />} />
        <Route path={AppRoute.MainEmpty} element={<MainEmptyScreen />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />}/>
        <Route path={AppRoute.FavoritesEmpty} element={<FavoritesEmptyScreen />}/>
        <Route path={AppRoute.Login} element={<AuthScreen />} />
        <Route path={AppRoute.OfferNotLogged} element={<RoomNotLoggedScreen />} />
        <Route path={AppRoute.Offer}>
          <Route index element={<RoomScreen />} />
          <Route path={AppRoute.OfferId} element={<RoomScreen />}/>
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
