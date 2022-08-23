import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import CommentForm from './comment-form';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockOffer} from '../../../utils';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="*"
          element={<CommentForm offerId={mockOffer.id}/>}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

it('Component CommentForm: should render correctly', () => {
  history.push('/fake');

  render(fakeApp);

  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText('Your review')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Tell how was your stay, what you like and what can be improved')).toBeInTheDocument();
});
