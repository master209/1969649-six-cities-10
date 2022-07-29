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

import {loadOffers} from '../../store/action';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {AppRoute, cities} from '../../const';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

function App(): JSX.Element {
  const {offers, activeCity} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  if(offers.length === 0) {
    dispatch(loadOffers());
  }

  const {Main, MainEmpty, Favorites, FavoritesEmpty, OfferId, Login} = AppRoute;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main} element={<MainScreenWrapped cities={cities} offers={offers} activeCity={activeCity} />} />
        <Route path={MainEmpty} element={<MainEmptyScreen cities={cities} />} />
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
