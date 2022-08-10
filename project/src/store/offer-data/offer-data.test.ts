import {offerData, setFavoriteStatus} from './offer-data';

import {makeFakeOffer} from '../../utils/mocks';

const mockOffer = makeFakeOffer();

const state = {
  offer: mockOffer,
  offersNear: [],
  comments: [],
  isError404: false,
  isOfferLoading: false,
};

describe('Reducer: offerData', () => {
  it('Should return inverted setFavoriteStatus', () => {
    const offer = {...state.offer, isFavorite: true};
    const resultState = {...state, offer};

    expect(offerData.reducer(state, setFavoriteStatus()))
      .toEqual(resultState);
  });
});
