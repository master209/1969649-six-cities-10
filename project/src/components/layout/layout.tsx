import {PropsWithChildren} from 'react';

import {Header, Footer} from './internal';

import {useScrollToTop} from '../../hooks/scroll-to-top';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean;
  withFooterContainer?: boolean;
}>;

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  useScrollToTop();

  return (
    <>
      <Header />
      {children}
      {withFooter && <Footer withContainer={withFooterContainer} />}
    </>
  );
}

export default Layout;
