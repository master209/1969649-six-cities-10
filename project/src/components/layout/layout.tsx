import {PropsWithChildren} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {Header, Footer} from './internal';

import useIsAuthorized from '../../hooks/is-authorized';
import useNeedAuthorize from '../../hooks/need-authorize';
import useSetOffersFavoriteStatus from '../../hooks/set-offers-favorite-status';

import {AppRoute} from '../../const';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean;
  withFooterContainer?: boolean;
}>;

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  const location = useLocation();
  const isAuthorized = useIsAuthorized();

  useNeedAuthorize();
  useSetOffersFavoriteStatus();

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
