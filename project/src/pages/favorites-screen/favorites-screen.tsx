import {Layout} from '../../components/layout';
import {Favorites} from '../../components/favorites';

type FavoritesScreenProps = {
  onChangeCity: (city: string) => void;
};

function FavoritesScreen({onChangeCity}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Layout withFooter withFooterContainer>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <Favorites onChangeCity={onChangeCity} />
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default FavoritesScreen;
