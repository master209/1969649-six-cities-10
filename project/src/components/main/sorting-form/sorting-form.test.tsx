import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import SortingForm from './sorting-form';
import HistoryRouter from '../../../components/history-route/history-route';

import {store} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<SortingForm />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component SortingForm: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
});
