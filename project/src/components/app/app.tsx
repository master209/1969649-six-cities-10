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

import {useAppSelector} from '../../hooks';
import ScrollToTop from '../../hooks/scroll-to-top';

import {AppRoute, cities} from '../../const';

import {city} from '../../mocks/map/city';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

function App(): JSX.Element {
  const {offers, points} = useAppSelector((state) => state);

  const {Main, MainEmpty, Favorites, FavoritesEmpty, OfferId, Login} = AppRoute;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={Main} element={<MainScreenWrapped city={city} cities={cities} offers={offers} points={points} />} />
        <Route path={MainEmpty} element={<MainEmptyScreen cities={cities} />} />
        <Route path={Favorites} element={<FavoritesScreen offers={offers} />} />
        <Route path={FavoritesEmpty} element={<FavoritesEmptyScreen />} />
        <Route path={OfferId} element={<RoomScreenWrapped offers={offers} city={city} points={points}/>} />
        <Route path={Login} element={<AuthScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
