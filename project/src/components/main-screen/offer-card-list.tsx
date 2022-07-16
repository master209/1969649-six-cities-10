import {useState} from 'react';

import {Offers, Offer} from '../../types/offers';
import OfferCard from './offer-card';

type PlaceCardListProps = {
  offers: Offers;
};

function OfferCardList({offers}: PlaceCardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(offers[0].id);

  const handleMouseOver = (id: string) => () => {
    /* eslint-disable-next-line no-console */
    console.log('activeCardId, id: ', activeCardId, id);
    setActiveCardId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <article
          key={offer.id}
          onMouseOver={handleMouseOver(offer.id)}
          className="cities__card place-card"
        >
          <OfferCard offer={offer} />
        </article>
      ))}
    </div>
  );
}

export default OfferCardList;
