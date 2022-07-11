import {PropsWithChildren} from 'react'; // https://up.htmlacademy.ru/react/10/module/2/item/11
import Header from './header';
import Footer from './footer';

type LayoutProps = PropsWithChildren<{
  // children: JSX.Element;     // так тоже работает, но корректна ли такая типизация??
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
