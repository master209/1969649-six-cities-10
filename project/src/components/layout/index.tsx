import {PropsWithChildren} from 'react';
import {Outlet} from 'react-router-dom';

import {Header, Footer} from './internal';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean,
  containerClass?: string,
}>

function Layout({withFooter, containerClass}: LayoutProps): JSX.Element {
  return (
    <div className={`page ${containerClass || ''}`}>
      <Header />
      <Outlet />
      {withFooter && <Footer />}
    </div>
  );
}

export default Layout;
