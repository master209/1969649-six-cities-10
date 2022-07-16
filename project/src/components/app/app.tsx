import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoute} from '../../const';
import {Offers} from '../../types/offers';
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
  offers: Offers;
};

function App({placesFound, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesFound={placesFound} offers={offers} />} />
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
