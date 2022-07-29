import {useState, KeyboardEvent} from 'react';

import Layout from '../../components/layout/layout';
import {
  CitiesList,
  OfferCardsList,
  SortingForm
} from '../../components/main-screen';

import {collapseSortList} from '../../store/action';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {Offers} from '../../types/offers';
import {City, Points, Point} from '../../types/map';

type MainProps = {
  city: City;
  cities: string[];
  offers: Offers;
  points: Points;
  renderMap: (
    city: City,
    points: Points,
    selectedPoint: Point | undefined,
    className: string,
  ) => JSX.Element;
};

function MainScreen(props: MainProps): JSX.Element {
  const {city, cities, offers, points, renderMap} = props;

  const {activeCity} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();

  const onListItemHover = (offerId: number) => {
    const currentPoint = points.find(({id}) => id === offerId);
    setSelectedPoint(currentPoint);
  };

  const onListItemOut = (offerId: number) => {
    setSelectedPoint(undefined);
  };

  const keyDownHandler = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.code === 'Escape') {
      dispatch(collapseSortList());
    }
  };

  return (
    <div className="page page--gray page--main" onKeyDown={keyDownHandler}>
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList
            cities={cities}
            activeCity={activeCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                {offers.length ? <SortingForm /> : null}
                <OfferCardsList
                  offers={offers}
                  handleMouseOver={onListItemHover}
                  handleMouseOut={onListItemOut}
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
