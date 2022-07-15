import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  [key: string]: any
}

function withPrivateRoute(Component: () => JSX.Element, isGuest: boolean): (props: Props) => JSX.Element {
  return function Wrapped(props: Props): JSX.Element {
    /* eslint-disable-next-line no-console */
    console.log('Wrapped: ', Component.name, props); // для просмотра свойств оборачиваемого компонента

    return (
      isGuest ? <Navigate to={AppRoute.Login} /> : <Component {...props} />
    );
  };
}

export default withPrivateRoute;
