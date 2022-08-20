import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import SignOut from './sign-out';
import HistoryRouter from '../../history-route/history-route';

import {AppRoute} from '../../../const';

import {store} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Favorites}
          element={<h1>This is Favorites page</h1>}
        />
        <Route
          path='*'
          element={<SignOut />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component SignOut: should render correctly', async () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
});
