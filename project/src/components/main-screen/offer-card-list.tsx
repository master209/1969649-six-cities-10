import {Offers} from '../../types/offers';
import {OfferCard} from './';

type PlaceCardListProps = {
  offers: Offers;
  handleMouseOver: (id: string) => void;
};

function OfferCardList({offers, handleMouseOver}: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onMouseOver={() => handleMouseOver(offer.id)}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
