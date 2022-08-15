import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import {Loader} from '../../components/common';
import {
  CommentForm,
  CommentsList,
  OfferNearsList,
  Gallery,
  Property,
  Host,
} from '../../components/room-screen';

import {
  fetchLoadComments,
  fetchOffer,
  fetchLoadOffersNear
} from '../../store/api-actions';

import {useAppDispatch} from '../../hooks';
import useSetOffersFavoriteStatus from '../../hooks/set-offers-favorite-status';
import useIsAuthorized from '../../hooks/is-authorized';
import useAppSelectors from '../../hooks/app-selectors';

import {Offer, City, Location, Locations} from '../../types/offers';

import {AppRoute} from '../../const';

type RoomProps = {
  renderMap: (
    city: City,
    locations: Locations,
    selectedLocation: Location | undefined,
    className: string,
  ) => JSX.Element;
};

function RoomScreen({renderMap}: RoomProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useIsAuthorized();

  useSetOffersFavoriteStatus(true);

  const {offers, isOfferLoading, offer, offersNear, comments, isError404} = useAppSelectors();


  const {id} = useParams();

  useEffect((): void => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchLoadOffersNear(id));
      dispatch(fetchLoadComments(id));
    }
  },[id]);

  isError404 && navigate(AppRoute.NotFound);

  const locations = offersNear.map((offerNear) => offerNear.location);

  const renderOffer = (_offer: Offer) => {

    const selectedLocation = _offer.location;
    locations.push(selectedLocation);

    return (
      <Layout>
        <main className="page__main page__main--property">
          <section className="property">
            <Gallery offer={_offer}/>
            <div className="property__container container">
              <div className="property__wrapper">
                <Property offer={_offer} isAuthorized={isAuthorized} />
                <Host offer={_offer}/>

                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                  <CommentsList
                    comments={comments}
                  />
                  {isAuthorized && offer && <CommentForm offerId={offer.id} />}
                </section>

              </div>
            </div>

            {renderMap(offers[0].city, locations, selectedLocation, 'property__map')}
          </section>

          <div className="container">
            <OfferNearsList offersNear={offersNear} />
          </div>
        </main>
      </Layout>
    );
  };

  return (
    <div className="page">
      {offer && !isOfferLoading
        ? renderOffer(offer)
        : <Loader />}
    </div>
  );
}

export default RoomScreen;
