import {State} from '../../types/state';
import {Offer, Offers, Comments} from '../../types/offers';

import {NameSpace} from '../../const';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;
export const getOffersNear = (state: State): Offers => state[NameSpace.Offer].offersNear;
export const getComments = (state: State): Comments => state[NameSpace.Offer].comments;
export const getIsError404 = (state: State): boolean => state[NameSpace.Offer].isError404;
export const getIsLoading = (state: State): boolean => state[NameSpace.Offer].isOfferLoading;
