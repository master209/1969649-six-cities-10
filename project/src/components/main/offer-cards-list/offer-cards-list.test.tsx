import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import OfferCardsList from './offer-cards-list';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockOffers} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path='*'
          element={
            <OfferCardsList
              offers={mockOffers}
              handleMouseOver={jest.fn}
              handleMouseOut={jest.fn}
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component OfferCardsList: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByTestId('offer-cards-list')).toBeInTheDocument();
});
