import {PropsWithChildren} from 'react';
// import {Header, Footer} from '../../components';   // что-то неправильно, сборщик дает ошибку
import Header from './internal/header/header';
import Footer from './internal/footer/footer';

type LayoutProps = PropsWithChildren<{
  withFooter: boolean,
  headerWithNav: boolean,
}>

function Layout(props: LayoutProps): JSX.Element {
  const {children, withFooter, headerWithNav} = props;

  return (
    <div className="page page--gray page--main">
      <Header headerWithNav={headerWithNav}/>
      {children}
      {withFooter && <Footer />}
    </div>
  );
}

export default Layout;
