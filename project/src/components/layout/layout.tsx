import {PropsWithChildren} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {Header, Footer} from './internal';

import {useScrollToTop} from '../../hooks/scroll-to-top';
import useIsAuth from '../../hooks/is-auth';

import {AppRoute} from '../../const';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean;
  withFooterContainer?: boolean;
}>;

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  useScrollToTop();

  const location = useLocation();
  const isAuth = useIsAuth();

  if(location.pathname === AppRoute.Login && isAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
      <Header />
      {children}
      {withFooter && <Footer withContainer={withFooterContainer} />}
    </>
  );
}

export default Layout;
