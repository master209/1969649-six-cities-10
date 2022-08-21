import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import OfferCard from '../offer-card/offer-card';

import {store, makeFakeOffer} from '../../utils';

const mockOffer = makeFakeOffer();

const history = createMemoryHistory();

const fakeRoute = '/fakeRoute';

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={fakeRoute}
          element={
            <OfferCard
              key={1}
              offer={mockOffer}
              classPrefix="favorites"
              imgSize={{width: 150, height: 110}}
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('should render correctly', () => {
  history.push(fakeRoute);

  render(fakeApp);

  expect(screen.getByText(/€/i)).toBeInTheDocument();
});
