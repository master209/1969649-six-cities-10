import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import Premium from './premium';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockOffers} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<Premium />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component Premium: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByText(/Premium/i)).toBeInTheDocument();
});
