import {useEffect} from 'react';
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

import {fetchOffersAction, fetchFavoritesAction} from '../../store/api-actions';
import {setFavoritesStatus} from '../../store/main-process/main-process';
import {
  getActiveCity,
  getOffers,
  getIsOffersLoading,
  getIsOffersLoaded
} from '../../store/main-process/selectors';

import {
  getFavorites,
  getIsFavoriteLoading,
  getIsFavoritesLoaded
} from '../../store/favorite-data/selectors';

import withMap from '../../hocs/with-map';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {AppRoute, cities} from '../../const';

const MainScreenWrapped = withMap(MainScreen);
const RoomScreenWrapped = withMap(RoomScreen);

function App(): JSX.Element {
  const {
    Main,
    MainEmpty,
    Favorites,
    FavoritesEmpty,
    OfferId,
    Login
  } = AppRoute;

  const dispatch = useAppDispatch();

  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const isOffersLoaded = useAppSelector(getIsOffersLoaded);

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getIsFavoriteLoading);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  useEffect((): void => {
    if (!isFavoritesLoaded && !isFavoritesLoading) {
      dispatch(fetchFavoritesAction());
      <Loader />;
    }
  },[]);

  useEffect((): void => {
    if (isFavoritesLoaded) {
      dispatch(setFavoritesStatus({favorites}));
    }
  },[favorites]);

  if (!offers.length && !isOffersLoading && !isOffersLoaded) {
    dispatch(fetchOffersAction(activeCity));
  }

  if (isOffersLoading) {
    return (
      <Loader />
    );
  }

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
