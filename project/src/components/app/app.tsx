import {Route, BrowserRouter, Routes} from 'react-router-dom';

import ScrollToTop from '../../hooks/scroll-to-top';
import {AppRoute} from '../../const';
import {Offers} from '../../types/offers';
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
        <Route path={Main} element={<MainScreen offersFound={offersFound} offers={offers} />} />
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
