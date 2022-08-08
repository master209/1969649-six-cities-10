import useAppSelectors from './app-selectors';

import {AuthorizationStatus} from '../const';

const useIsAuthorized = () => {
  const {authorizationStatus} = useAppSelectors();

  return authorizationStatus === AuthorizationStatus.Auth;
};

export default useIsAuthorized;
