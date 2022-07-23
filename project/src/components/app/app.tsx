import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {
  MainScreen,
  MainEmptyScreen,
  FavoritesScreen,
  FavoritesEmptyScreen,
  RoomScreen,
  AuthScreen,
  NotFoundScreen,
} from '../../pages';

import withMap from '../../hocs/with-map';

import ScrollToTop from '../../hooks/scroll-to-top';

import {Offers} from '../../types/offers';

import {AppRoute} from '../../const';

import {CITY} from '../../mocks/map/city';
import {POINTS} from '../../mocks/map/points';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

type AppProps = {
  offersFound: number;
  offers: Offers;
};

function App({offersFound, offers}: AppProps): JSX.Element {
  const {Main, MainEmpty, Favorites, FavoritesEmpty, OfferId, Login} = AppRoute;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={Main} element={<MainScreenWrapped offersFound={offersFound} offers={offers} city={CITY} points={POINTS} />} />
        <Route path={MainEmpty} element={<MainEmptyScreen />} />
        <Route path={Favorites} element={<FavoritesScreen offers={offers} />} />
        <Route path={FavoritesEmpty} element={<FavoritesEmptyScreen />} />
        <Route path={OfferId} element={<RoomScreenWrapped offers={offers} city={CITY} points={POINTS} />} />
        <Route path={Login} element={<AuthScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
