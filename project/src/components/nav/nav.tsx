import {useLocation} from 'react-router-dom';

import Auth from './auth';
import NoAuth from './no-auth';

import {useAppSelector} from '../../hooks';

import {AppRoute, AuthorizationStatus} from '../../const';

function Nav(): JSX.Element {
  const location = useLocation();

  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <nav className="header__nav">
      {/* eslint-disable-next-line */
        authorizationStatus === AuthorizationStatus.Auth ? <Auth /> : location.pathname === AppRoute.Login ? null : <NoAuth />
      }
    </nav>
  );
}

export default Nav;
