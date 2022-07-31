import {useAppSelector} from './';

import {AuthorizationStatus} from '../const';

const useIsAuth = () => {
  const {authorizationStatus} = useAppSelector((state) => state);

  return authorizationStatus === AuthorizationStatus.Auth;
};

export default useIsAuth;
