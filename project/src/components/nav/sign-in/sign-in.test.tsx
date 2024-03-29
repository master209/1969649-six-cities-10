import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

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

it('Component SignIn: should render correctly', async () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
