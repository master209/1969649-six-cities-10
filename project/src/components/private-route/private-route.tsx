import {Navigate} from 'react-router-dom';

import useIsAuth from '../../hooks/is-auth';

import {AppRoute} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuth = useIsAuth();

  return (
    isAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
