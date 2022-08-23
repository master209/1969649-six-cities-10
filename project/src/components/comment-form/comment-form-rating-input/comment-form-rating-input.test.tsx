import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import CommentFormRatingInput from './comment-form-rating-input';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockComment} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<CommentFormRatingInput
            value={4}
            title={'good'}
            form={{comment:'', rating:0}}
            setForm={jest.fn}
          />}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component CommentFormRatingInput: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByRole('radio')).toBeInTheDocument();
});
