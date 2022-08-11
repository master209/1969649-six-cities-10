import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import HistoryRouter from '../../components/history-route/history-route';
import MainEmptyScreen from './main-empty-screen';

import {AppRoute, AuthorizationStatus, cities} from '../../const';

import {makeFakeOffers, makeFakeOffer} from '../../utils';

const mockOffers = makeFakeOffers();
const mockOffer = makeFakeOffer();

const mockStore = configureMockStore();
const history = createMemoryHistory();
const activeCity = 'Paris';

global.window.scrollTo = jest.fn();

describe('Component: MainEmptyScreen', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NoAuth},
      MAIN: {offers: mockOffers},
      OFFER: {offer: mockOffer},
      FAVORITE: {favorites: []},
    });

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

