import Premium from './premium';

type cardDescription = {
  price: string,
  isBookmarkActive?: boolean,
  rating: string,
  name: string,
  type: string,
}
type PlaceCardProps = {
  imgSrc: string,
  isPremium?: boolean,
  description: cardDescription,
}
function PlaceCard({imgSrc, isPremium, description}: PlaceCardProps): JSX.Element {
  const {price, isBookmarkActive, rating, name, type} = description;
  const bookmarkClass = `place-card__bookmark-button ${isBookmarkActive && 'place-card__bookmark-button--active'} button`;

  return (
    <article className="cities__card place-card">
      {isPremium && <Premium />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imgSrc} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;