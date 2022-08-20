import {render, screen} from '@testing-library/react';

import useNeedAuthorize from './need-authorize';

jest.mock('./app-selectors', () => {
  const mockUseAppSelectors = () => ({isError401: true});

  return {
    __esModule: true,
    default: mockUseAppSelectors,
  };
});

jest.mock('./is-authorized', () => {
  const mockUseIsAuthorized = () => true;

  return {
    __esModule: true,
    default: mockUseIsAuthorized,
  };
});

jest.mock('react-router-dom', () => ({
  useNavigate: () => (route: string) => `Login page. Route: ${route}`
}));

describe('Hook: useNeedAuthorize', () => {
  it('should call react-router-dom "navigate" function when user authorized and server sent 401', () => {
    const text = useNeedAuthorize();

    render(
      <h1>{text}</h1>
    );

    expect(screen.getByText(/Login page/i)).toBeInTheDocument();
    expect(screen.getByText(/Route: \/login/i)).toBeInTheDocument();
  });
});
