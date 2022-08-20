import {PropsWithChildren} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {Header, Footer} from './index';
import Loader from '../loader/loader';

import useAppSelectors from '../../hooks/app-selectors';
import useIsAuthorized from '../../hooks/is-authorized/is-authorized';
import useNeedAuthorize from '../../hooks/need-authorize/need-authorize';
import useSetOffersFavoriteStatus from '../../hooks/set-offers-favorite-status/set-offers-favorite-status';

import {AppRoute} from '../../const';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean;
  withFooterContainer?: boolean;
}>;

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  const {isOffersLoading, isOfferLoading, isFavoritesLoading} = useAppSelectors();

  const location = useLocation();
  const isAuthorized = useIsAuthorized();

  useNeedAuthorize();
  useSetOffersFavoriteStatus();

  const renderLoader = () => isOffersLoading || isOfferLoading || isFavoritesLoading ? <Loader /> : null;

  if (location.pathname === AppRoute.Login && isAuthorized) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
      <Header />
      {children}
      {withFooter && <Footer withContainer={withFooterContainer} />}
      {renderLoader()}
    </>
  );
}

export default Layout;
