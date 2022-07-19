import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';
import {Offer} from '../../types/offers';
import {Premium} from '../common';

type OfferNearCardProps = {
  offer: Offer;
}

/* «Карточка предложения неподалёку» */
function OfferNearCard({offer}: OfferNearCardProps): JSX.Element {
  const {photo, isPremium, price, name, type, rating} = offer;

  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;

  return (
    <article className="near-places__card place-card">
      {isPremium && <Premium /> }
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={linkToOffer}>
          <img className="place-card__image" src={photo} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating.stars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferNearCard;
