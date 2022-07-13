import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute,} from '../../const';
import Layout from '../../components/layout/index';
import Main from '../../pages/main-screen';
import MainEmpty from '../../pages/main-empty-screen';
import Room from '../../pages/room-screen';
import RoomNotLogged from '../../pages/room-not-logged-screen';
import Favorites from '../../pages/favorites-screen';
import FavoritesEmpty from '../../pages/favorites-empty-screen';
import Auth from '../../pages/auth-screen';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found-screen';

type AppProps = {
  isGuest: boolean,
  placesFound: number,
}

function App({isGuest, placesFound}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main placesFound={placesFound} />} />
          <Route path={AppRoute.Main} element={<Main placesFound={placesFound} />} />
          <Route path={AppRoute.MainEmpty} element={<MainEmpty />} />

          <Route path={AppRoute.Offer}>
            <Route index element={<Room />} />
            <Route path={AppRoute.OfferId} element={<Room />}/>
          </Route>
          <Route path={AppRoute.OfferNotLogged} element={<RoomNotLogged />} />
        </Route>

        <Route path="/" element={<Layout withFooter />}>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute isGuest={isGuest}>
              <Favorites />
            </PrivateRoute>
          }
          />
        </Route>

        <Route path="/" element={<Layout withFooter containerClass="page--favorites-empty" />}>
          <Route path={AppRoute.FavoritesEmpty} element={
            <PrivateRoute isGuest={isGuest}>
              <FavoritesEmpty />
            </PrivateRoute>
          }
          />
        </Route>

        <Route path="/" element={<Layout containerClass="page--gray page--login" />}>
          <Route path={AppRoute.Login} element={<Auth />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
