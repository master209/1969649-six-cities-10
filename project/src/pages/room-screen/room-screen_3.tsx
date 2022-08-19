import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import {
  OfferNearsList,
  Gallery,
  Property,
  Host,
  Reviews
} from '../../components/room-screen';

import {fetchLoadComments, fetchOffer, fetchLoadOffersNear} from '../../store/api-actions';
import {setNearLocations} from '../../store/offer-data/offer-data';

import {useAppDispatch} from '../../hooks';
import useAppSelectors from '../../hooks/app-selectors';
import useIsAuthorized from '../../hooks/is-authorized';
import useSetOffersFavoriteStatus from '../../hooks/set-offers-favorite-status';

import {City, Location, Locations} from '../../types/offers';

import {AppRoute} from '../../const';

type RoomProps = {
  isOffersLoaded: boolean;
  renderMap: (
    city: City,
    locations: Locations,
    selectedLocation: Location | undefined,
    className: string,
  ) => JSX.Element;
};

function RoomScreen({renderMap, isOffersLoaded}: RoomProps): JSX.Element {
  const {
    offers,
    offer,
    offersNear,
    nearLocations,
    isOfferLoaded,
    isFavoritesLoaded,
    comments,
    isError404
  } = useAppSelectors();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useIsAuthorized();

  useSetOffersFavoriteStatus(true);

  const {id} = useParams();

  useEffect((): void => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchLoadOffersNear(id));
      dispatch(fetchLoadComments(id));
    }
  },[id]);

  let locations = [...nearLocations];

  useEffect((): void => {
    locations = offersNear.map((_offer) => _offer.location);
  },[offersNear]);

  useEffect((): void => {
    offer && locations.push(offer.location);
    locations.length && dispatch(setNearLocations(locations));
  },[offer, locations]);

  useEffect((): void => {
    isError404 && navigate(AppRoute.NotFound);
  });

  // проверка загрузки всех зависимостей
  const isDataLoaded = () =>
    offers.length
    && isOfferLoaded
    && isOffersLoaded
    && isFavoritesLoaded
    && offersNear.length
    && locations.length === 3;

  return (
    <div className="page">
      <Layout>
        {offer && isDataLoaded() ?
          (
            <main className="page__main page__main--property">
              <section className="property">
                <Gallery offer={offer}/>
                <div className="property__container container">
                  <div className="property__wrapper">
                    <Property offer={offer} isAuthorized={isAuthorized} />
                    <Host offer={offer}/>
                    <Reviews offer={offer} comments={comments} isAuthorized={isAuthorized} />
                  </div>
                </div>
                {renderMap(offers[0].city, locations, offer.location, 'property__map')}
              </section>

              <div className="container">
                <OfferNearsList offersNear={offersNear} />
              </div>
            </main>
          ) : null}
      </Layout>
    </div>
  );
}

export default RoomScreen;
