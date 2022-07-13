import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoute} from '../../const';
import {
  Main,
  MainEmpty,
  Room,
  RoomNotLogged,
  Favorites,
  FavoritesEmpty,
  Auth,
  NotFound,
} from '../../pages';

import PrivateRoute from '../private-route';

type AppProps = {
  isGuest: boolean,
  placesFound: number,
}

function App({isGuest, placesFound}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main placesFound={placesFound} />} />
        <Route path={AppRoute.Main} element={<Main placesFound={placesFound} />} />
        <Route path={AppRoute.MainEmpty} element={<MainEmpty />} />

        <Route path={AppRoute.Offer}>
          <Route index element={<Room />} />
          <Route path={AppRoute.OfferId} element={<Room />}/>
        </Route>
        <Route path={AppRoute.OfferNotLogged} element={<RoomNotLogged />} />

        <Route path={AppRoute.Favorites} element={
          <PrivateRoute isGuest={isGuest}>
            <Favorites />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.FavoritesEmpty} element={
          <PrivateRoute isGuest={isGuest}>
            <FavoritesEmpty />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.Login} element={<Auth />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
