import Layout from '../../components/layout/layout';
import {FavoritesCard} from '../../components/favorites-screen';

import withPrivateRoute from '../../hocs/with-private-route';

import {Offers} from '../../types/offers';

import {isGuest} from '../../const';

type FavoritesScreenProps = {
  offers: Offers;
};

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Layout withFooter withFooterContainer>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#todo">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoritesCard offer={offers[3]} />
                    <FavoritesCard offer={offers[1]} />
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#todo">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoritesCard offer={offers[2]} />
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default withPrivateRoute(FavoritesScreen, isGuest);
