import {Route, BrowserRouter, Routes} from 'react-router-dom';

import ScrollToTop from '../../hooks/scroll-to-top';
import {CITY} from '../../mocks/city';
import {POINTS} from '../../mocks/points';
import {
  MainScreen,
  MainEmptyScreen,
  FavoritesScreen,
  FavoritesEmptyScreen,
  RoomScreen,
  RoomNotLoggedScreen,
  AuthScreen,
  NotFoundScreen,
} from '../../pages';

import {Offers} from '../../types/offers';

import {AppRoute} from '../../const';

type AppProps = {
  offersFound: number;
  offers: Offers;
};

function App({offersFound, offers}: AppProps): JSX.Element {
  const {Main, MainEmpty, Favorites, FavoritesEmpty, Offer, OfferId, OfferNotLogged, Login} = AppRoute;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={Main} element={<MainScreen offersFound={offersFound} offers={offers} points={POINTS} city={CITY} />} />
        <Route path={MainEmpty} element={<MainEmptyScreen />} />
        <Route path={Favorites} element={<FavoritesScreen offers={offers} />} />
        <Route path={FavoritesEmpty} element={<FavoritesEmptyScreen />} />
        <Route path={OfferNotLogged} element={<RoomNotLoggedScreen />} />
        <Route path={Offer} element={<RoomScreen />} >
          <Route path={OfferId} element={<RoomScreen />} />
        </Route>
        <Route path={Login} element={<AuthScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
