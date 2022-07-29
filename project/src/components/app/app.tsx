import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {
  MainScreen,
  MainEmptyScreen,
  FavoritesScreen,
  FavoritesEmptyScreen,
  RoomScreen,
  AuthScreen,
  LoadingScreen,
  NotFoundScreen,
} from '../../pages';

import withMap from '../../hocs/with-map';

import {useAppSelector} from '../../hooks';

import {AppRoute, cities} from '../../const';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

function App(): JSX.Element {
  const {isLoading, isLoaded, offers, activeCity} = useAppSelector((state) => state);

  if(offers.length === 0 && !isLoading && !isLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {Main, MainEmpty, Favorites, FavoritesEmpty, OfferId, Login} = AppRoute;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main} element={<MainScreenWrapped cities={cities} offers={offers} activeCity={activeCity} />} />
        <Route path={MainEmpty} element={<MainEmptyScreen cities={cities} activeCity={activeCity} />} />
        <Route path={Favorites} element={<FavoritesScreen offers={offers} />} />
        <Route path={FavoritesEmpty} element={<FavoritesEmptyScreen />} />
        <Route path={OfferId} element={<RoomScreenWrapped offers={offers} />} />
        <Route path={Login} element={<AuthScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
