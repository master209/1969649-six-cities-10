import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import CommentsList from './comments-list';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockComments} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<CommentsList comments={mockComments} />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component CommentsList: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByTestId(/comments-list/i)).toBeInTheDocument();
});
