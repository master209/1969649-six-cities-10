import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import Footer from './footer';
import HistoryRouter from '../../history-route/history-route';

const history = createMemoryHistory();

it('Component Footer: should render correctly', () => {
  render(
    <HistoryRouter history={history}>
      <Footer />
    </HistoryRouter>);

  expect(screen.getByAltText(/6 cities/i)).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
});
