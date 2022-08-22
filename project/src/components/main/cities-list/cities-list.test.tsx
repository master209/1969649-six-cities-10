import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import CitiesList from './cities-list';
import HistoryRouter from '../../../components/history-route/history-route';

import {cities} from '../../../const';

import {store} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path='*'
          element={
            <CitiesList
              cities={cities}
              activeCity='Paris'
              onChangeCity={jest.fn}
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component CitiesList: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  cities.map((city) => expect(screen.getByText(city)).toBeInTheDocument());
});
