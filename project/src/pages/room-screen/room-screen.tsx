import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import {Premium, Loader} from '../../components/common';
import {
  CommentForm,
  CommentsList,
  OfferInsideItem,
  OfferNearsList
} from '../../components/room-screen';

import {setFavoriteStatus} from '../../store/offer-data/offer-data';
import {
  fetchLoadComments,
  fetchFavoriteStatus,
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

  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>();

  const {id} = useParams();

  useEffect((): void => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchLoadOffersNear(id));
      dispatch(fetchLoadComments(id));
    }
  },[id]);

  isError404 && navigate(AppRoute.NotFound);

  const locations = offers.map((_offer) => _offer.location);

  const onNearListItemHover = (offerId: number) => {
    const hoveredOffer = offers.find(({id:_id}) => _id === offerId);
    setSelectedLocation(hoveredOffer && hoveredOffer.location);
  };

  const onListItemOut = () => {
    setSelectedLocation(undefined);
  };

  const renderOffer = (_offer: Offer) => {
    const {
      isFavorite,
      isPremium,
      price,
      title,
      type,
      rating,
      goods,
      bedrooms,
      maxAdults,
      description,
      host,
      images
    } = _offer;

    const {avatarUrl, name: userName, isPro} = host;

    const hostProClass = isPro ? 'property__avatar-wrapper--pro' : '';

    const favoriteClass = isFavorite
      ? 'property__bookmark-button property__bookmark-button--active button'
      : 'property__bookmark-button button';

    const favoriteSvgClass = isFavorite
      ? 'place-card__bookmark-icon'
      : 'property__bookmark-icon';

    const favoriteStatus = () => {
      dispatch(fetchFavoriteStatus({offerId: _offer.id, offerStatus: +!isFavorite}));
      dispatch(setFavoriteStatus());
    };

    const handleOnChangeFavoriteStatus = () => {
      isAuthorized
        ? favoriteStatus()
        : navigate(AppRoute.Login);
    };

    return (
      <Layout>
        <main className="page__main page__main--property">
          <section className="property">

            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, idx) => (
                  <div className="property__image-wrapper" key={image}>
                    <img
                      className="property__image"
                      src={image}
                      alt="Studio"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <Premium containerClass="property__mark"/>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className={favoriteClass}
                    type="button"
                    onClick={handleOnChangeFavoriteStatus}
                  >
                    <svg className={favoriteSvgClass} width="31" height="33">
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
                      <OfferInsideItem key={item} label={item}/>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${hostProClass} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
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
            <OfferNearsList
              offersNear={offersNear}
              handleMouseOver={onNearListItemHover}
              handleMouseOut={onListItemOut}
            />
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
