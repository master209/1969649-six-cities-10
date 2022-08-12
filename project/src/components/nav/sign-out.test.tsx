import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignOut from './sign-out';
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

describe('Component: SignOut', () => {
  it('should render correctly', async () => {
    history.push('/fake');

    render(fakeApp);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should redirect to Favorites url when user clicked to "Sign out" link', async () => {
    history.push('/fake');

    render(fakeApp);

    await userEvent.click(screen.getByTestId('header__nav-link--profile'));

    expect(screen.getByText(/This is Favorites page/i)).toBeInTheDocument();
  });
});
