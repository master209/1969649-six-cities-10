import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {render, screen} from '@testing-library/react';

import Map from '../map/map';

import {store, mockCity, mockOffers, location} from '../../utils';

const history = createMemoryHistory();

const fakeRoute = '/fakeRoute';

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={fakeRoute}
          element={
            <Map
              city={mockCity}
              locations={mockOffers}
              selectedLocation={location}
              className='cities__map'
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component Map: should render correctly', async () => {
  history.push(fakeRoute);

  render(fakeApp);

  expect(screen.getByTestId('map-section')).toBeInTheDocument();
});
