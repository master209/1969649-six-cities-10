import {useAppSelector} from './';

import {getAuthorizationStatus} from '../store/user-process/selectors';

import {AuthorizationStatus} from '../const';

const useIsAuthorized = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth;
};

export default useIsAuthorized;
