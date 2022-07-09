import MainScreen from '../../pages/main-screen/main-screen';
import Layout from '../../components/layout/layout';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}: AppScreenProps): JSX.Element {
  return (
    <Layout withFooter={false} headerWithNav>
      <MainScreen placesFound={placesFound} />
    </Layout>
  );
}

export default App;
