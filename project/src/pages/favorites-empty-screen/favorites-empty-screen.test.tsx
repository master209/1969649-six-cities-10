import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import {FavoritesEmptyScreen} from '../index';

describe('Component: FavoritesEmptyScreen', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter >
        <FavoritesEmptyScreen />
      </BrowserRouter>
    );

    expect(screen.getByText('Favorites (empty)')).toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });

});

