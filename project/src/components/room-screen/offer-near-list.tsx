import {OfferNearCard} from '.';

import {Offers} from '../../types/offers';

type OfferNearCardProps = {
  offers: Offers;
}

/* «Список предложений неподалёку» */
function OffersNearList({offers}: OfferNearCardProps): JSX.Element {
  const [...offersTmp] = offers;
  offersTmp.length = 3; // согласно ТЗ, пока нам нужно выводить только первые три предложения

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offersTmp.map((offer) => (
          <OfferNearCard
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </section>
  );
}

export default OffersNearList;
