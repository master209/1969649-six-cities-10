import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundScreen />
      </BrowserRouter>
    );

    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
