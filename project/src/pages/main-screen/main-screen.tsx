import {useState, KeyboardEvent} from 'react';

import Layout from '../../components/layout/layout';
import {
  CitiesList,
  OfferCardsList,
  SortingForm
} from '../../components/main-screen';

import {collapseSortList} from '../../store/action';

import {useAppDispatch} from '../../hooks';

import {City, Offers, Location, Locations} from '../../types/offers';

type MainProps = {
  cities: string[];
  offers: Offers;
  activeCity: string;
  renderMap: (
    activeCity: City,
    locations: Locations,
    selectedLocation: Location | undefined,
    className: string,
  ) => JSX.Element;
};

function MainScreen(props: MainProps): JSX.Element {
  const {cities, offers, activeCity, renderMap} = props;

  const dispatch = useAppDispatch();

  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>();

  const locations = offers.map((offer) => offer.location);

  const onListItemHover = (offerId: number) => {
    const hoveredOffer = offers.find(({id}) => id === offerId);
    setSelectedLocation(hoveredOffer && hoveredOffer.location);
  };

  const onListItemOut = () => {
    setSelectedLocation(undefined);
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
                {renderMap(offers[0].city, locations, selectedLocation, 'cities__map')}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default MainScreen;
