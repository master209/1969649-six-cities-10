import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
// import {Layout} from '../../components';     // что-то неправильно, сборщик дает ошибку
import MainScreen from '../../pages/main-screen';
import MainEmptyScreen from '../../pages/main-empty-screen';
import PropertyScreen from '../../pages/property-screen';
import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen';
import AuthScreen from '../../pages/auth-screen';
import NotFoundScreen from '../../pages/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}: AppScreenProps): JSX.Element {
  return (
  /*
      <Layout withFooter={false} headerWithNav>
        <MainScreen placesFound={placesFound} />
      </Layout>
  */
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen placesFound={placesFound} />}
        />
        <Route
          path={AppRoute.Empty}
          element={<MainEmptyScreen />}
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyScreen isGuest={false} />}
        />
        <Route
          path={AppRoute.PropertyNotLogged}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <PropertyNotLoggedScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.FavoritesEmpty}
          element={<FavoritesEmptyScreen />}
        />
        <Route
          path={AppRoute.Login}
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
