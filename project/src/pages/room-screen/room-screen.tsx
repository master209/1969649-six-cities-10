import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {Layout} from '../../components/layout';
import {
  OfferNearList,
  Gallery,
  Property,
  Host,
  Reviews
} from '../../components/offer';

import {fetchLoadComments, fetchOffer, fetchLoadOffersNear} from '../../store/api-actions';

import {useAppDispatch} from '../../hooks';
import useAppSelectors from '../../hooks/app-selectors';
import useIsAuthorized from '../../hooks/is-authorized';
import useSetOffersFavoriteStatus from '../../hooks/set-offers-favorite-status';

import {City, Location, Offers} from '../../types/offers';

import {AppRoute} from '../../const';

type RoomProps = {
  areOffersLoaded: boolean;
  renderMap: (
    city: City,
    locations: Offers,
    selectedLocation: Location | undefined,
    className: string,
  ) => JSX.Element;
};

function RoomScreen({renderMap, areOffersLoaded}: RoomProps): JSX.Element {
  const {offers, offer, offersNear, isOfferLoaded, isFavoritesLoaded, comments, isError404} = useAppSelectors();

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

  useEffect((): void => {
    isError404 && navigate(AppRoute.NotFound);
  });

  // проверка загрузки всех зависимостей
  const isDataLoaded = () =>
    offers.length
    && isOfferLoaded
    && areOffersLoaded
    && offersNear.length
    && (isFavoritesLoaded || !isAuthorized);

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
                {renderMap(offers[0].city, [...offersNear, offer], offer.location, 'property__map')}
              </section>

              <div className="container">
                <OfferNearList offersNear={offersNear} />
              </div>
            </main>
          ) : null}
      </Layout>
    </div>
  );
}

export default RoomScreen;
