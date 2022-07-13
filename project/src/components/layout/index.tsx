import {PropsWithChildren} from 'react';

import {Header, Footer} from './internal';

type LayoutProps = PropsWithChildren<{
  children: JSX.Element;
  withFooter?: boolean,
  container?: boolean;
}>

function Layout({children, withFooter, container}: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      {withFooter && <Footer container={container} />}
    </>
  );
}

export default Layout;
