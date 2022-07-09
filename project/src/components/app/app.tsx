import Layout from '../../components/layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
// import MainScreenEmpty from '../../pages/main-empty-screen/main-empty-screen';
// import Property from '../../pages/property-screen/property-screen';
// import PropertyNotLogged from '../../pages/property-not-logged-screen/property-not-logged-screen';
// import Favorites from '../../pages/favorites-screen/favorites-screen';
// import FavoritesEmpty from '../../pages/favorites-empty-screen/favorites-empty-screen';
// import Auth from '../../pages/auth-screen/auth-screen';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}: AppScreenProps): JSX.Element {
  return (
    <Layout withFooter={false} headerWithNav>
      <MainScreen placesFound={placesFound} />
      {/*<MainScreenEmpty />*/}
      {/*<Property isGuest={false}/>*/}
      {/*<PropertyNotLogged />*/}
      {/*<Favorites />*/}
      {/*<FavoritesEmpty />*/}
      {/*<Auth />*/}
    </Layout>
  );
}

export default App;
