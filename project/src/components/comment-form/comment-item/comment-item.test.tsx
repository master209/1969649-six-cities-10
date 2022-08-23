import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import CommentItem from './comment-item';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockComment} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<CommentItem comment={mockComment} />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component CommentItem: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByTestId(/comment-item/i)).toBeInTheDocument();
});
