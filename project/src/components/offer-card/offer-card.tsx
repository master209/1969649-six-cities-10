import {Link, useNavigate} from 'react-router-dom';

import {Premium} from '../main';

import {fetchFavoriteStatus} from '../../store/api-actions';

import {useAppDispatch} from '../../hooks';
import useIsAuthorized from '../../hooks/is-authorized';

import {getStarsClass, getOfferStatus} from '../../utils';

import {Offer} from '../../types/offers';

import {AppRoute} from '../../const';

type OfferCardProps = {
  offer: Offer;
  handleCardMouseOver?: () => void;
  handleCardMouseOut?: () => void;
  classPrefix: string;
  imgSize: {width: number, height: number};
}

/* «Карточка предложения по аренде» */
function OfferCard(props: OfferCardProps): JSX.Element {
  const {offer, handleCardMouseOver, handleCardMouseOut, classPrefix, imgSize:{width, height}} = props;
  const {previewImage, isPremium, price, title, type, isFavorite, rating} = offer;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useIsAuthorized();

  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;

  const favoriteClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const handleOnChangeFavoriteStatus = () => {
    isAuthorized
      ? dispatch(fetchFavoriteStatus({offerId: offer.id, offerStatus: getOfferStatus(isFavorite)}))
      : navigate(AppRoute.Login);
  };

  return (
    <article
      className={`${classPrefix}__card place-card`}
      onMouseOver={handleCardMouseOver}
      onMouseOut={handleCardMouseOut}
    >
      {isPremium && <Premium /> }
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={linkToOffer}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button
            className={favoriteClass}
            type="button"
            onClick={handleOnChangeFavoriteStatus}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getStarsClass(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
