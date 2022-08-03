import {OfferNearCard} from '.';

import {Offers} from '../../types/offers';

type OfferNearCardProps = {
  offersNear: Offers;
  handleMouseOver: (id: number) => void;
}

/* «Список предложений неподалёку» */
function OfferNearsList({offersNear, handleMouseOver}: OfferNearCardProps): JSX.Element {

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
