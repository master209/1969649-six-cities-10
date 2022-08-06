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

import {fetchLoadOffers} from '../../store/api-actions';
import {changeCity} from '../../store/main-process/main-process';
import {
  getOffers,
  getActiveCity,
  getIsOffersLoading,
  getIsOffersLoaded
} from '../../store/main-process/selectors';

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

  if (!offers.length && !isOffersLoading && !isOffersLoaded) {
    dispatch(fetchLoadOffers(activeCity));
  }

  if (isOffersLoading) {
    return <Loader />;
  }

  const onChangeCity = (city: string) => {
    dispatch(changeCity({city}));
    dispatch(fetchLoadOffers(city));
  };

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
              onChangeCity={onChangeCity}
            />
          }
        />
        <Route
          path={MainEmpty}
          element={
            <MainEmptyScreen
              cities={cities}
              activeCity={activeCity}
              onChangeCity={onChangeCity}
            />
          }
        />
        <Route
          path={Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen onChangeCity={onChangeCity} />
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
          element={<AuthScreen onChangeCity={onChangeCity} />}
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
