import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {PrivateRoute} from '../../components/private-route';
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

import {fetchOffersAction} from '../../store/api-actions';
import {
  getActiveCity,
  getOffers,
  getIsOffersLoading,
  getIsOffersLoaded
} from '../../store/main-process/selectors';

import withMap from '../../hocs/with-map';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {AppRoute, cities} from '../../const';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const isOffersLoaded = useAppSelector(getIsOffersLoaded);

  if (!offers.length && !isOffersLoading && !isOffersLoaded) {
    dispatch(fetchOffersAction(activeCity));
  }

  if (isOffersLoading) {
    return (
      <Loader />
    );
  }

  const {
    Main,
    MainEmpty,
    Favorites,
    FavoritesEmpty,
    OfferId,
    Login
  } = AppRoute;

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
            <PrivateRoute>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={FavoritesEmpty}
          element={
            <PrivateRoute>
              <FavoritesEmptyScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={OfferId}
          element={<RoomScreenWrapped />}
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
