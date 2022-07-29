import {OfferNearCard} from '.';

import {Offers} from '../../types/offers';

import {OFFERS_NEAR} from '../../const';

type OfferNearCardProps = {
  offers: Offers;
  handleMouseOver: (id: number) => void;
}

/* «Список предложений неподалёку» */
function OfferNearsList({offers, handleMouseOver}: OfferNearCardProps): JSX.Element {
  const [...offersNear] = offers;
  offersNear.length = OFFERS_NEAR;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offersNear.map((offer) => (
          <OfferNearCard
            key={offer.id}
            offer={offer}
            handleCardMouseOver={() => handleMouseOver(offer.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferNearsList;
