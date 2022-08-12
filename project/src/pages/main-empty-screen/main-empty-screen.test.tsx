import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import HistoryRouter from '../../components/history-route/history-route';
import MainEmptyScreen from './main-empty-screen';

import {AppRoute, cities} from '../../const';

import {store} from '../../utils';

const activeCity = 'Paris';
const history = createMemoryHistory();

global.window.scrollTo = jest.fn();

describe('Component: MainEmptyScreen', () => {
  it('should render correctly', () => {
    history.push(AppRoute.MainEmpty);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.MainEmpty}
              element={
                <MainEmptyScreen
                  cities={cities}
                  activeCity={activeCity}
                  onChangeCity={jest.fn()}
                />
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${activeCity}`)).toBeInTheDocument();
  });
});
