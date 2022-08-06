import useAppSelectors from '../hooks/use-app-selectors';

import {AuthorizationStatus} from '../const';

const useIsAuthorized = () => {
  const {authorizationStatus} = useAppSelectors();

  return authorizationStatus === AuthorizationStatus.Auth;
};

export default useIsAuthorized;
