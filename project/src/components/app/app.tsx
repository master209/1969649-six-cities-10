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

type AppProps = {
  placesFound: number,
}

function App({placesFound}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placesFound={placesFound} />} />
        <Route path={AppRoute.MainEmpty} element={<MainEmpty />} />

        <Route path={AppRoute.Offer}>
          <Route index element={<Room />} />
          <Route path={AppRoute.OfferId} element={<Room />}/>
        </Route>
        <Route path={AppRoute.OfferNotLogged} element={<RoomNotLogged />} />

        <Route path={AppRoute.Favorites} element={<Favorites />}/>
        <Route path={AppRoute.FavoritesEmpty} element={<FavoritesEmpty />}/>
        <Route path={AppRoute.Login} element={<Auth />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
