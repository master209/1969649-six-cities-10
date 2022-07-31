import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {
  MainScreen,
  MainEmptyScreen,
  FavoritesScreen,
  FavoritesEmptyScreen,
  RoomScreen,
  AuthScreen,
  Loader,
  NotFoundScreen,
} from '../../pages';
import {PrivateRoute} from '../../components/private-route';

import withMap from '../../hocs/with-map';

import {useAppSelector} from '../../hooks';

import {AppRoute, cities} from '../../const';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

function App(): JSX.Element {
  const {authorizationStatus, isLoading, isLoaded, offers, activeCity} = useAppSelector((state) => state);

  if(!offers.length && !isLoading && !isLoaded) {
    return (
      <Loader />
    );
  }

  const {Main, MainEmpty, Favorites, FavoritesEmpty, OfferId, Login} = AppRoute;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Main}
          element={
            <MainScreenWrapped
              cities={cities}
              offers={offers}
              activeCity={activeCity}
            />
          }
        />
        <Route
          path={MainEmpty}
          element={
            <MainEmptyScreen
              cities={cities}
              activeCity={activeCity}
            />
          }
        />
        <Route
          path={Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={FavoritesEmpty}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesEmptyScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={OfferId}
          element={<RoomScreenWrapped offers={offers} />}
        />
        <Route
          path={Login}
          element={<AuthScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
