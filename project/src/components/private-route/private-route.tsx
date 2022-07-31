import {Navigate} from 'react-router-dom';

import useIsAuth from '../../hooks/is-auth';

import {AppRoute} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isGuest = !useIsAuth();

  return (
    isGuest
      ? <Navigate to={AppRoute.Login} />
      : children
  );
}

export default PrivateRoute;
