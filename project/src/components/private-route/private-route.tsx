import {Navigate} from 'react-router-dom';

import useIsAuthorized from '../../hooks/is-auth';

import {AppRoute} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuthorized = useIsAuthorized();

  return (
    isAuthorized
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
