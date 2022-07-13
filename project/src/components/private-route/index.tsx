import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  isGuest: boolean;
}

function PrivateRoute({children, isGuest}: PrivateRouteProps): JSX.Element {
  return (
    isGuest ? <Navigate to={AppRoute.Login} /> : children
  );
}

export default PrivateRoute;
