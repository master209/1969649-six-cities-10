import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import HistoryRouter from '../history-route/history-route';
import AuthScreen from '../../pages/auth-screen/auth-screen';

import {AppRoute, AuthorizationStatus} from '../../const';

import {makeFakeOffers, makeFakeOffer} from '../../utils/mocks';

const mockOffers = makeFakeOffers();
const mockOffer = makeFakeOffer();

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  MAIN: {offers: mockOffers},
  OFFER: {offer: mockOffer},
  FAVORITE: {favorites: []},
});

const history = createMemoryHistory();

global.window.scrollTo = jest.fn();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<h1>Main Screen page</h1>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <AuthScreen
              onChangeCity={jest.fn()}
            />
          }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Main Screen page/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
