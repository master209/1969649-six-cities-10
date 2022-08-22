import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import FavoritesScreen from '../favorites-screen/favorites-screen';
import HistoryRouter from '../../components/history-route/history-route';

import {AppRoute} from '../../const';

import {store} from '../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen onChangeCity={jest.fn} />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component FavoritesScreen: should render correctly', async () => {
  history.push(AppRoute.Favorites);

  render(fakeApp);

  expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
});
