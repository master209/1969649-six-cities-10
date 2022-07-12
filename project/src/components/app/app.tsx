import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute,} from '../../const';
import Layout from '../../components/layout/index';
import MainScreen from '../../pages/main-screen';
import MainEmptyScreen from '../../pages/main-empty-screen';
import PropertyScreen from '../../pages/property-screen';
import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen';
import AuthScreen from '../../pages/auth-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen';

type AppScreenProps = {
  isGuest: boolean,
  placesFound: number,
}

function App({isGuest, placesFound}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<MainScreen placesFound={placesFound} />}
          />
          <Route
            path={AppRoute.Root}
            element={<MainScreen placesFound={placesFound} />}
          />
          <Route
            path={AppRoute.Empty}
            element={<MainEmptyScreen />}
          />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route
            path={AppRoute.Property}
            element={
              <PrivateRoute isGuest={isGuest}>
                <PropertyScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.PropertyNotLogged}
            element={<PropertyNotLoggedScreen />}
          />
        </Route>

        <Route path="/" element={<Layout withFooter />}>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isGuest={isGuest}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/" element={<Layout withFooter containerClass="page--favorites-empty" />}>
          <Route
            path={AppRoute.FavoritesEmpty}
            element={
              <PrivateRoute isGuest={isGuest}>
                <FavoritesEmptyScreen />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="/" element={<Layout containerClass="page--gray page--login" />}>
          <Route
            path={AppRoute.Login}
            element={<AuthScreen />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
