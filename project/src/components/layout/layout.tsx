import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: JSX.Element;
  withFooter: boolean,
  headerWithNav: boolean,
}

function Layout(props: LayoutProps): JSX.Element {
  const {children, withFooter, headerWithNav} = props;
  return (
    <div className="page page--gray page--main">
      <Header headerWithNav={headerWithNav}/>
      <main className="page__main page__main--index">
        {children}
      </main>
      {withFooter && <Footer />}
    </div>
  );
}

export default Layout;
