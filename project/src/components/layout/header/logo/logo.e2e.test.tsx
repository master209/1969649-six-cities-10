import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Logo from './logo';
import HistoryRouter from '../../../history-route/history-route';

const history = createMemoryHistory();

it('Component Logo: should redirect to root url when user clicked to link', async () => {
  history.push('/fake');

  render(
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="/"
          element={<h1>This is main page</h1>}
        />
        <Route
          path='*'
          element={<Logo />}
        />
      </Routes>
    </HistoryRouter>);

  expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('link'));

  expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
});
