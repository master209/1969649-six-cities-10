import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AuthScreen from '../../../pages/auth-screen/auth-screen';
import SignIn from './sign-in';
import HistoryRouter from '../../history-route/history-route';

import {AppRoute} from '../../../const';

import {store} from '../../../utils';

const history = createMemoryHistory();
const onChangeCity = () => jest.fn();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={
            <AuthScreen
              onChangeCity={onChangeCity}
            />
          }
        />
        <Route
          path='*'
          element={<SignIn />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

describe('Component: SignIn', () => {
  it('should render correctly', async () => {
    history.push('/fake');

    render(fakeApp);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should redirect to Login url when user clicked to "Sign in" link', async () => {
    render(fakeApp);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
