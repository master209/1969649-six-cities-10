import {useAppSelector} from './';

import {AuthorizationStatus} from '../const';

const useIsAuthorized = () => {
  const {authorizationStatus} = useAppSelector((state) => state);

  return authorizationStatus === AuthorizationStatus.Auth;
};

export default useIsAuthorized;
