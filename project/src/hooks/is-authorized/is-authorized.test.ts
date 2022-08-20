import useIsAuthorized from './is-authorized';

jest.mock('../app-selectors', () => {
  const mockUseAppSelectors = () => ({authorizationStatus: 'AUTH'});

  return {
    __esModule: true,
    default: mockUseAppSelectors,
  };
});

describe('Hook: useIsAuthorized', () => {
  it('should return "true" when user authorized', () => {
    const isAuthorized = useIsAuthorized();

    expect(isAuthorized).toBe(true);
  });
});
