import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CommentForm from './comment-form';
import HistoryRouter from '../../../components/history-route/history-route';

import {store, mockOffer} from '../../../utils';

const history = createMemoryHistory();

const mockComment = {
  comment: 'This is too good to be true! You can still be surprised!',
  rating: 4
};

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

describe('Component CommentForm', () => {
  it('submit button should disabled if comment is wrong', async () => {
    history.push('/fake');

    render(fakeApp);

    expect(screen.getByText('Your review')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell how was your stay, what you like and what can be improved')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button').getAttribute('disabled')).toEqual('');
  });

  it('submit button should enabled if comment is correct', async () => {
    history.push('/fake');

    render(fakeApp);

    expect(screen.getByText('Your review')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button').getAttribute('disabled')).toEqual('');

    await userEvent.type(screen.getByTestId('4-rating'), mockComment.rating.toString());
    await userEvent.type(screen.getByTestId('comment-input'), mockComment.comment);

    expect(screen.getByRole('button').getAttribute('disabled')).not.toEqual('');
    expect(screen.getByDisplayValue(mockComment.comment)).toBeInTheDocument();
  });
});
