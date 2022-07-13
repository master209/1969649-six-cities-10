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
      {
        // eslint-disable-next-line no-console
        console.log(id)
      }
      {children}
    </>
  );

  return (
    isGuest ? <Navigate to={AppRoute.Login} /> : renderOffer()
  );
}

export default PrivateRoute;
