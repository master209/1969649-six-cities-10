import {Offers} from '../../types/offers';
import {OfferNearCard} from '.';

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
            offer={offer}
            key={offer.id}
          />
        ))}
      </div>
    </section>
  );
}

export default OffersNearList;
