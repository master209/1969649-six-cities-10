import {render, screen} from '@testing-library/react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

import MainEmptyScreen from './main-empty-screen';

import {AppRoute, cities} from '../../const';

const mockStore = configureMockStore();
const store = mockStore({});
const activeCity = 'Paris';

const onChangeCity = (city: string) => {};

describe('Component: MainEmptyScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.MainEmpty}
              element={
                <MainEmptyScreen
                  cities={cities}
                  activeCity={activeCity}
                  onChangeCity={onChangeCity}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>);

    // console.info(screen.);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${activeCity}`)).toBeInTheDocument();
  });

});

