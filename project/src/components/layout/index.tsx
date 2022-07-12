import {PropsWithChildren} from 'react';
import {Outlet} from 'react-router-dom';
// import {Header, Footer} from '../../components';   // что-то неправильно, сборщик дает ошибку
import Header from './internal/header/header';
import Footer from './internal/footer/footer';

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
