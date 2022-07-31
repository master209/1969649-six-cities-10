import {PropsWithChildren} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {Header, Footer} from './internal';

import {useAppSelector} from '../../hooks';
import {useScrollToTop} from '../../hooks/scroll-to-top';

import {AppRoute, AuthorizationStatus} from '../../const';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean;
  withFooterContainer?: boolean;
}>;

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  useScrollToTop();

  const location = useLocation();

  const {authorizationStatus} = useAppSelector((state) => state);

  if(location.pathname === AppRoute.Login && authorizationStatus === AuthorizationStatus.Auth) {
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
