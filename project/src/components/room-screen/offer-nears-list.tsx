import {OfferCard} from '../../components/common';

import {Offers} from '../../types/offers';

type OfferNearCardProps = {
  offersNear: Offers;
  handleMouseOver: (id: number) => void;
  handleMouseOut: (id: number) => void;
}

/* «Список предложений неподалёку» */
function OfferNearsList({offersNear, handleMouseOver, handleMouseOut}: OfferNearCardProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offersNear.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            handleCardMouseOver={() => handleMouseOver(offer.id)}
            handleCardMouseOut={() => handleMouseOut(offer.id)}
            classPrefix="near-places"
            imgSize={{width: 260, height: 200}}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferNearsList;
