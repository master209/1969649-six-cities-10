import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Loader from './loader';

it('Component Loader: should render correctly', () => {
  render(
    <BrowserRouter >
      <Loader />
    </BrowserRouter>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
