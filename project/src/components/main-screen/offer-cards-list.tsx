import {OfferCard} from '.';

import {Offers} from '../../types/offers';

type OfferCardsListProps = {
  offers: Offers;
  handleMouseOver: (id: string) => void;
};

function OfferCardsList({offers, handleMouseOver}: OfferCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          handleCardMouseOver={() => handleMouseOver(offer.id)}
        />
      ))}
    </div>
  );
}

export default OfferCardsList;
