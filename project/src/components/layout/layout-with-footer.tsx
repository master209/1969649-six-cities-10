import Header from './header'
import Footer from './footer'

function LayoutWithFooter(): JSX.Element {
  return (
	<div className="page page--gray page--main">
		<Header />
		<Footer />
	</div>
  );
}

export default LayoutWithFooter;
