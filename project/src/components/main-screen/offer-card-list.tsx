import {Offers, Offer} from '../../types/offers';
import OfferCard from './offer-card';

type PlaceCardListProps = {
  offers: Offers;
};

function OfferCardList({offers}: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <article key={offer.id} className="cities__card place-card">
          <OfferCard {...offer} />
        </article>
      ))}
    </div>
  );
}

export default OfferCardList;
