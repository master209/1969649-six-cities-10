import HeaderNav from '../header-nav/header-nav';
import Logo from '../../../logo/logo'

type HeaderProps = {
  headerWithNav: boolean;
}

function Header({headerWithNav}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {headerWithNav && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
