import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = {
  isGuest: boolean;
  children: JSX.Element;
}

function PrivateRoute({children, isGuest}: PrivateRouteProps): JSX.Element {
  return (
    isGuest ? <Navigate to={AppRoute.Login} /> : children
  );
}

export default PrivateRoute;
