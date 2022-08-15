import {OfferCard} from '../../components/common';

import {Offers} from '../../types/offers';

type OfferNearCardProps = {
  offersNear: Offers;
}

/* «Список предложений неподалёку» */
function OfferNearsList({offersNear}: OfferNearCardProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offersNear.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            classPrefix="near-places"
            imgSize={{width: 260, height: 200}}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferNearsList;
