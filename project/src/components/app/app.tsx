import {Route, Routes} from 'react-router-dom';

import {PrivateRoute} from '../../components/private-route';
import Loader from '../common/Loader/loader';
import {
  MainScreen,
  MainEmptyScreen,
  FavoritesScreen,
  FavoritesEmptyScreen,
  RoomScreen,
  AuthScreen,
  NotFoundScreen,
} from '../../pages';

import {fetchLoadOffers} from '../../store/api-actions';
import {changeCity} from '../../store/main-process/main-process';

import withMap from '../../hocs/with-map';

import {useAppDispatch} from '../../hooks';
import useAppSelectors from '../../hooks/app-selectors';

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
  const {offers, activeCity, isOffersLoading, isOffersLoaded} = useAppSelectors();

  if (!offers.length && !isOffersLoading && !isOffersLoaded) {
    dispatch(fetchLoadOffers(activeCity));
  }

  if (!isOffersLoading) {
    return <Loader />;
  }

  const onChangeCity = (city: string) => {
    dispatch(changeCity({city}));
    dispatch(fetchLoadOffers(city));
  };

  return (
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
            <FavoritesScreen
              onChangeCity={onChangeCity}
            />
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
        element={
          <AuthScreen
            onChangeCity={onChangeCity}
          />
        }
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}

export default App;
