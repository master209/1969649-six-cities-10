import {useState, KeyboardEvent} from 'react';
import {Navigate} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import {
  CitiesList,
  OfferCardsList,
  SortingForm
} from '../../components/main-screen';

import {collapseSortList} from '../../store/main-process/main-process';

import {useAppDispatch} from '../../hooks';
import useSetOffersFavoriteStatus from '../../hooks/set-offers-favorite-status';
import useNeedAuthorize from '../../hooks/need-authorize';

import {City, Offers, Location, Locations} from '../../types/offers';

import {AppRoute} from '../../const';

type MainProps = {
  cities: string[];
  offers: Offers;
  activeCity: string;
  onChangeCity: (city: string) => void;
  renderMap: (
    activeCity: City,
    locations: Locations,
    selectedLocation: Location | undefined,
    className: string,
  ) => JSX.Element;
};

function MainScreen(props: MainProps): JSX.Element {
  const {cities, offers, activeCity, renderMap, onChangeCity} = props;

  const dispatch = useAppDispatch();
  useNeedAuthorize();
  useSetOffersFavoriteStatus();

  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>();

  if(!offers.length) {
    return <Navigate to={AppRoute.MainEmpty} />;
  }

  const locations = offers.map((offer) => offer.location);

  const onListItemHover = (offerId: number) => {
    const hoveredOffer = offers.find(({id}) => id === offerId);
    setSelectedLocation(hoveredOffer?.location);
  };

  const onListItemOut = () => {
    setSelectedLocation(undefined);
  };

  const keyDownHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    evt.code === 'Escape' && dispatch(collapseSortList());
  };

  return (
    <div className="page page--gray page--main" onKeyDown={keyDownHandler}>
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList
            cities={cities}
            activeCity={activeCity}
            onChangeCity={onChangeCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <SortingForm />
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
