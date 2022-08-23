import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {render, screen} from '@testing-library/react';

import OfferCard from '../offer-card/offer-card';

import {store, mockOffer} from '../../utils';

const history = createMemoryHistory();

const fakeRoute = '/fakeRoute';

const handleCardMouseOver = jest.fn();
const handleCardMouseOut = jest.fn();

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
              handleCardMouseOver={handleCardMouseOver}
              handleCardMouseOut={handleCardMouseOut}
              classPrefix="favorites"
              imgSize={{width: 150, height: 110}}
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    history.push(fakeRoute);

    render(fakeApp);

    expect(screen.getByText(/€/i)).toBeInTheDocument();
    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});

