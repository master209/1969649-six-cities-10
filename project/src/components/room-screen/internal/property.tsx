import {useNavigate} from 'react-router-dom';

import {OfferInsideItem} from '../index';
import {Premium} from '../../common';

import {setFavoriteStatus} from '../../../store/offer-data/offer-data';
import {fetchFavoriteStatus} from '../../../store/api-actions';

import {useAppDispatch} from '../../../hooks';

import {starsClass} from '../../../utils';

import {Offer} from '../../../types/offers';

import {AppRoute} from '../../../const';

type PropertyProps = {
  offer: Offer;
  isAuthorized: boolean;
}

/* Основные характеристики предложения */
function Property({offer, isAuthorized}: PropertyProps): JSX.Element {
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
  } = offer;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteClass = isFavorite
    ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';

  const favoriteSvgClass = isFavorite
    ? 'place-card__bookmark-icon'
    : 'property__bookmark-icon';

  const favoriteStatus = () => {
    dispatch(fetchFavoriteStatus({offerId: offer.id, offerStatus: +!isFavorite}));
    dispatch(setFavoriteStatus());
  };

  const handleOnChangeFavoriteStatus = () => {
    isAuthorized
      ? favoriteStatus()
      : navigate(AppRoute.Login);
  };

  return (
    <>
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
          <span style={starsClass(rating)}></span>
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
    </>
  );
}

export default Property;
