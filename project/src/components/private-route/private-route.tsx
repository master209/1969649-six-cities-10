import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = {
  isGuest: boolean;
  children: JSX.Element;
}

function PrivateRoute({children, isGuest}: PrivateRouteProps): JSX.Element {
  const {id} = useParams();

  const renderOffer = () => (
    <>
      <p>{id}</p>
      {children}
    </>
  );

  return (
    isGuest ? <Navigate to={AppRoute.Login} /> : renderOffer()
  );
}

export default PrivateRoute;
