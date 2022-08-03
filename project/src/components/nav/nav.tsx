import {useLocation} from 'react-router-dom';

import {SignOut, SignIn} from './';

import useIsAuthorized from '../../hooks/use-is-authorized';

import {AppRoute} from '../../const';

function Nav(): JSX.Element {
  const location = useLocation();
  const isAuthorized = useIsAuthorized();

  const renderAuthNav = () => {
    if (isAuthorized) {
      return <SignOut />;
    } else {
      return location.pathname === AppRoute.Login
        ? null
        : <SignIn />;
    }
  };

  return (
    <nav className="header__nav">
      {renderAuthNav()}
    </nav>
  );
}

export default Nav;
