import {useLocation} from 'react-router-dom';

import {Auth, NoAuth} from './';

import {useAppSelector} from '../../hooks';

import {AppRoute, AuthorizationStatus} from '../../const';

function Nav(): JSX.Element {
  const location = useLocation();

  const {authorizationStatus} = useAppSelector((state) => state);

  const renderAuthNav = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return <Auth/>;
    } else {
      return location.pathname === AppRoute.Login ? null : <NoAuth/>;
    }
  };

  return (
    <nav className="header__nav">
      {renderAuthNav()}
    </nav>
  );
}

export default Nav;
