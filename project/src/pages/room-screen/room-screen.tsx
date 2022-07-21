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

import {Offers} from '../../types/offers';
import {City, Point, Points} from '../../types/map';

import {AppRoute, OFFERS_NEAR} from '../../const';

import {reviews} from '../../mocks/reviews';

type RoomProps = {
  isGuest?: boolean;
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

function RoomScreen(props: RoomProps): JSX.Element {
  const {isGuest, offers, city, points, renderMap} = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();

  const params = useParams();

  const offer = offers.find(({id}) => (id === params.id));

  // обработка ошибки несуществующего OfferId
  if(!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const {isPremium, price, name, type, rating, features, hoster} = offer;
  const {avatar, name: userName, isPro} = hoster;

  const [...pointsNear] = points;
  pointsNear.length = OFFERS_NEAR;

  const hostProClass = isPro ? 'property__avatar-wrapper--pro' : '';

  const onListItemHover = (pointId: string) => {
    const currentPoint = points.find(({id}) => id === pointId);
    setSelectedPoint(currentPoint);
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
                  <h1 className="property__name">{name}</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: rating.stars}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating.value}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {features.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {features.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {features.whatInside.map((item) => (
                      <OfferInsideItem key={item} label={item} />
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${hostProClass} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {userName}
                    </span>
                    {isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
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

            {renderMap(city, pointsNear, selectedPoint, 'property__map')}
          </section>

          <div className="container">
            <OfferNearsList
              offers={offers}
              handleMouseOver={onListItemHover}
            />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default RoomScreen;
