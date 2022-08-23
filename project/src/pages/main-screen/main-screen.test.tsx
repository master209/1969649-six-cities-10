import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import MainScreen from './main-screen';
import HistoryRouter from '../../components/history-route/history-route';

import {store, mockOffers} from '../../utils';

import {cities} from '../../const';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={
            <MainScreen
              cities={cities}
              offers={mockOffers}
              activeCity="Paris"
              areOffersLoaded
              onChangeCity={jest.fn}
              renderMap={jest.fn()}
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component MainScreen: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByText(/places to stay in Paris/i)).toBeInTheDocument();
});
