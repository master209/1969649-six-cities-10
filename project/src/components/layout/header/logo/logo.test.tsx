import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import Logo from './logo';
import HistoryRouter from '../../../history-route/history-route';

const history = createMemoryHistory();

it('Component Logo: should render correctly', () => {
  render(
    <HistoryRouter history={history}>
      <Logo />
    </HistoryRouter>);

  expect(screen.getByAltText(/6 cities/i)).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
});
