import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';

import HistoryRouter from '../components/history-route/history-route';
import MainScreen from '../pages/main-screen/main-screen';
import withMap from './with-map';

import {AuthorizationStatus, cities} from '../const';

import {makeFakeOffer, makeFakeOffers} from '../utils';

const activeCity = 'Paris';
const mockOffers = makeFakeOffers();
const mockOffer = makeFakeOffer();

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  MAIN: {activeCity, offers: mockOffers},
  OFFER: {offer: mockOffer},
  FAVORITE: {favorites: []},
});

const history = createMemoryHistory();

global.window.scrollTo = jest.fn();

jest.mock('../components/map/map', () => {
  const mockMap = () => <>This is mock Map</>;

  return {
    __esModule: true,
    default: mockMap,
  };
});

describe('HOC: withMap', () => {
  it('base component should correct rendering when use with HOC', () => {
    const BaseComponentWrapped = withMap(() => <h1>Some component withMap</h1>);

    render(<BaseComponentWrapped />);

    expect(screen.getByText(/Some component withMap/i)).toBeInTheDocument();
  });

  it('base component should correct rendering another component with render-prop', () => {
    const BaseComponentWrapped = withMap(MainScreen);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BaseComponentWrapped
            cities={cities}
            offers={mockOffers}
            activeCity={activeCity}
            onChangeCity={jest.fn}
          />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getByText(/This is mock Map/i)).toBeInTheDocument();
    expect(screen.getByText(/places to stay in Paris/i)).toBeInTheDocument();
  });
});
