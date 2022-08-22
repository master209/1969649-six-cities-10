import {offerData, setFavoriteStatus} from './offer-data';

import {fetchLoadComments, fetchLoadOffersNear, fetchOffer} from '../api-actions/api-actions';

import {makeFakeOffer, makeFakeOffers, makeFakeComments, sortTo} from '../../utils';

import {Order} from '../../const';

const mockOffer = makeFakeOffer();
const mockOffers = makeFakeOffers();

const mockComments = makeFakeComments();

const state = {
  offer: null,
  offersNear: [],
  comments: [],
  isError404: false,
  isOfferLoading: false,
  isOfferLoaded: false,
};

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('Should return inverted setFavoriteStatus', () => {
    const newState = {...state, offer: mockOffer};
    const resultState = {...newState, offer: {...mockOffer, isFavorite: true}};

    expect(offerData.reducer(newState, setFavoriteStatus()))
      .toEqual(resultState);
  });

  it('should update offer by load offer', () => {
    const resultState = {...state, offer: mockOffer, isOfferLoaded: true};

    expect(offerData.reducer(state, {type: fetchOffer.fulfilled.type, payload: mockOffer}))
      .toEqual(resultState);
  });

  it('should update offersNear by load offersNear', () => {
    const resultState = {...state, offersNear: mockOffers};

    expect(offerData.reducer(state, {type: fetchLoadOffersNear.fulfilled.type, payload: mockOffers}))
      .toEqual(resultState || []);
  });

  it('should update comments by load comments', () => {
    const resultState = {...state, comments: sortTo(mockComments, 'id', Order.Desc)};

    expect(offerData.reducer(state, {type: fetchLoadComments.fulfilled.type, payload: mockComments}))
      .toEqual(resultState);
  });
});
