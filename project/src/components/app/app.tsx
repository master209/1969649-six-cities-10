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

// import {Layout} from '../../components'; // так не работает: Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
// import {PrivateRoute} from '../../components'; // так не работает: Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
import PrivateRoute from '../private-route';
import Layout from '../../components/layout';

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
