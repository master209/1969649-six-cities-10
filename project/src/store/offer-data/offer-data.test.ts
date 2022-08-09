import {offerData} from './offer-data';
import {setFavoriteStatus} from './offer-data';

import {makeFakeOffer} from '../../utils/mocks';

const fakeOffer = makeFakeOffer();

const state = {
  offer: fakeOffer,
  offersNear: [],
  comments: [],
  isError404: false,
  isOfferLoading: false,
};

describe('Reducer: offerData', () => {
  it('Should invert setFavoriteStatus', () => {
    state.offer.isFavorite = !state.offer.isFavorite;

    expect(offerData.reducer(state, setFavoriteStatus()))
      .toEqual(state);
  });
});
