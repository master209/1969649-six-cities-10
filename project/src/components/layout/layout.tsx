import Header from './header';

type LayoutProps = {
  children: JSX.Element;
}

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
