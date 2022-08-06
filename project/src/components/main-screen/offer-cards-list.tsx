import {OfferCard} from '.';

import {Offers} from '../../types/offers';

type OfferCardsListProps = {
  offers: Offers;
  handleMouseOver: (id: number) => void;
  handleMouseOut: (id: number) => void;
};

/* «Список предложений по аренде» */
function OfferCardsList({offers, handleMouseOver, handleMouseOut}: OfferCardsListProps): JSX.Element {
  return (offers && (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          handleCardMouseOver={() => handleMouseOver(offer.id)}
          handleCardMouseOut={() => handleMouseOut(offer.id)}
        />
      ))}
    </div>
  ));
}

export default OfferCardsList;
