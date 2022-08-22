import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import OfferNearList from './offer-near-list';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockOffers} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<OfferNearList offersNear={mockOffers} />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component OfferNearList: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
});
