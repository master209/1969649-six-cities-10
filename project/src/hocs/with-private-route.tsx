import {ComponentProps} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute} from '../const';

type Props = {
  [key: string]: ComponentProps<any>;
};

function withPrivateRoute(Component: (props: any) => JSX.Element, isGuest: boolean) {
  return function Wrapped(props: Props): JSX.Element {
    /* eslint-disable-next-line no-console */
    console.log('Wrapped: ', Component.name, props); // для просмотра свойств оборачиваемого компонента

    return (
      isGuest ? <Navigate to={AppRoute.Login} /> : <Component {...props} />
    );
  };
}

export default withPrivateRoute;
