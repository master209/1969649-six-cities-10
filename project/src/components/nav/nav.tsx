import {useLocation} from 'react-router-dom';

import {Auth, NoAuth} from './';

import useIsAuth from '../../hooks/is-auth';

import {AppRoute} from '../../const';

function Nav(): JSX.Element {
  const location = useLocation();
  const isAuth = useIsAuth();

  const renderAuthNav = () => {
    if (isAuth) {
      return <Auth/>;
    } else {
      return location.pathname === AppRoute.Login
        ? null
        : <NoAuth/>;
    }
  };

  return (
    <nav className="header__nav">
      {renderAuthNav()}
    </nav>
  );
}

export default Nav;
