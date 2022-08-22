import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OfferCard from '../offer-card/offer-card';

import {store, mockOffer} from '../../utils';

import {AppRoute, AuthorizationStatus} from '../../const';

const history = createMemoryHistory();

const fakeRoute = '/fakeRoute';

const linkToOffer = `${AppRoute.Offer}/${mockOffer.id}`;

const handleCardMouseOver = jest.fn();
const handleCardMouseOut = jest.fn();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={fakeRoute}
          element={
            <OfferCard
              key={1}
              offer={mockOffer}
              handleCardMouseOver={handleCardMouseOver}
              handleCardMouseOut={handleCardMouseOut}
              classPrefix="favorites"
              imgSize={{width: 150, height: 110}}
            />
          }
        />
        <Route
          path={linkToOffer}
          element={<h1>This is Offer page</h1>}
        />
        <Route
          path={AppRoute.Login}
          element={<h1>This is Login page</h1>}
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    history.push(fakeRoute);

    render(fakeApp);

    expect(screen.getByText(/€/i)).toBeInTheDocument();
    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });

  it('handleCardMouseOver, handleCardMouseOut should called when user mouseOver, mouseOut', async () => {
    history.push(fakeRoute);

    render(fakeApp);

    await userEvent.hover(screen.getByRole('article'));
    await userEvent.unhover(screen.getByRole('article'));

    expect(handleCardMouseOver).toBeCalled();
    expect(handleCardMouseOut).toBeCalled();
  });

  it('should redirect to Offer/:id url when user clicked to link', async () => {
    history.push(fakeRoute);

    render(fakeApp);

    expect(screen.getByText(/€/i)).toBeInTheDocument();
    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is Offer page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('link-to-offer'));

    expect(screen.getByText(/This is Offer page/i)).toBeInTheDocument();
  });

  it('should redirect to Login url when not authorized user clicked to bookmark button', async () => {
    history.push(fakeRoute);

    render(fakeApp);

    expect(screen.getByText(/€/i)).toBeInTheDocument();
    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/This is Login page/i)).toBeInTheDocument();
  });
});

