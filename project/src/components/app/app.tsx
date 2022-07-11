// import {Layout} from '../../components';     // что-то неправильно, сборщик дает ошибку
import Layout from '../../components/layout';
import MainScreen from '../../pages/main-screen';

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
