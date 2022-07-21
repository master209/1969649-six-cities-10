import {useState} from 'react';

import Layout from '../../components/layout/layout';
import {Locations, OfferCardsList} from '../../components/main-screen';

import {Offers} from '../../types/offers';
import {City, Points, Point} from '../../types/map';

type MainProps = {
  offersFound: number;
  offers: Offers;
  city: City;
  points: Points;
  renderMap: (
    city: City,
    points: Points,
    selectedPoint: Point | undefined,
    mapClass: string,
  ) => JSX.Element;
};

function MainScreen(props: MainProps): JSX.Element {
  const {offersFound, offers, city, points, renderMap} = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();

  const onListItemHover = (offerId: string) => {
    const currentPoint = points.find(({id}) => id === offerId);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Locations />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersFound} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OfferCardsList
                  offers={offers}
                  handleMouseOver={onListItemHover}
                />
              </section>
              <div className="cities__right-section">
                {renderMap(city, points, selectedPoint, 'cities__map')}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default MainScreen;
