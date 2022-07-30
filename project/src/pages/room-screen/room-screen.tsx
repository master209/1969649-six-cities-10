import {useState} from 'react';
import {useParams, Navigate} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import {Premium} from '../../components/common';
import {
  ReviewForm,
  ReviewsList,
  OfferInsideItem,
  OfferNearsList
} from '../../components/room-screen';

import {City, Offers, Location, Locations} from '../../types/offers';

import {AppRoute} from '../../const';

import {reviews} from '../../mocks/reviews';

type RoomProps = {
  isGuest?: boolean;
  offers: Offers;
  renderMap: (
    city: City,
    locations: Locations,
    selectedLocation: Location | undefined,
    className: string,
  ) => JSX.Element;
};

function RoomScreen(props: RoomProps): JSX.Element {
  const {isGuest, offers, renderMap} = props;

  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>();

  const params = useParams();

  const offer = offers.find(({id}) => (id.toString() === params.id));

  // обработка ошибки несуществующего OfferId
  if(!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const locations = offers.map((_offer) => _offer.location);

  const {
    isPremium,
    price,
    title,
    type,
    rating,
    goods,
    bedrooms,
    maxAdults,
    host,
    description,
  } = offer;

  const {avatarUrl, name: userName, isPro} = host;

  const hostProClass = isPro ? 'property__avatar-wrapper--pro' : '';

  const onNearListItemHover = (offerId: number) => {
    const hoveredOffer = offers.find(({id}) => id === offerId);
    setSelectedLocation(hoveredOffer && hoveredOffer.location);
  };

  return (
    <div className="page">
      <Layout>
        <main className="page__main page__main--property">
          <section className="property">

            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/room.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
                </div>
              </div>
            </div>

            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <Premium containerClass="property__mark" /> }
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item) => (
                      <OfferInsideItem key={item} label={item} />
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${hostProClass} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {userName}
                    </span>
                    {isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>

                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList
                    reviews={reviews}
                  />
                  {!isGuest && <ReviewForm />}
                </section>
              </div>
            </div>

            {renderMap(offers[0].city, locations, selectedLocation, 'property__map')}
          </section>

          <div className="container">
            <OfferNearsList
              offers={offers}
              handleMouseOver={onNearListItemHover}
            />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default RoomScreen;
