import {PropsWithChildren} from 'react';
import {Header, Footer} from './internal';

type LayoutProps = PropsWithChildren<{
  withFooter?: boolean,
  withFooterContainer?: boolean,
}>

function Layout({children, withFooter, withFooterContainer}: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      {withFooter && <Footer withContainer={withFooterContainer} />}
    </>
  );
}

export default Layout;
