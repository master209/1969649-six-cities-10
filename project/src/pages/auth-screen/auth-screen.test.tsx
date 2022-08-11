import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import AuthScreen from './auth-screen';
import HistoryRouter from '../../components/history-route/history-route';

import {AuthorizationStatus} from '../../const';

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

global.window.scrollTo = jest.fn();
const onChangeCity = () => jest.fn();

describe('Component: AuthScreen', () => {
  it('should render "AuthScreen" when user navigate to "login" url', async () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthScreen onChangeCity={onChangeCity} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email'), 'user-11');
    await userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/user-11/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
