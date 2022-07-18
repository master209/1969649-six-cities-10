import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';
import {Offer} from '../../types/offers';
import {Premium} from '../../components/common';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferCardProps): JSX.Element {
  const {photo, isPremium, isFavorite, price, name, type, rating} = offer;

  const linkTo = `${AppRoute.Offer}/${offer.id}`;

  const favoriteClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  return (
    <>
      {isPremium && <Premium /> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={linkTo}>
          <img className="place-card__image" src={photo} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating.stars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default OfferCard;
