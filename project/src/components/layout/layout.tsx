import {PropsWithChildren} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {Header, Footer} from './internal';

import {useScrollToTop} from '../../hooks/use-scroll-to-top';
import useIsAuthorized from '../../hooks/use-is-authorized';

import {AppRoute} from '../../const';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean;
  withFooterContainer?: boolean;
}>;

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  useScrollToTop();

  const location = useLocation();
  const isAuthorized = useIsAuthorized();

  if (location.pathname === AppRoute.Login && isAuthorized) {
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
