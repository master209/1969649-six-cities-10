import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import Favorites from './favorites';
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
          element={<Favorites onChangeCity={jest.fn} />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component Favorites: should render correctly', async () => {
  history.push(AppRoute.Favorites);

  render(fakeApp);

  expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
});
