import {createAction} from '@reduxjs/toolkit';

import {Offer, Offers, Comments} from '../types/offers';

import {AuthorizationStatus} from '../const';

export const changeCity = createAction<{city: string}>('changeCity');

export const clickSort = createAction('clickSort');

export const changeSort = createAction<{sort: string}>('changeSort');

export const collapseSortList = createAction('collapseSortList');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');


export const loadOffers = createAction<Offers>('loadOffers');

export const loadOffer = createAction<Offer>('loadOffer');

export const loadOffersNear = createAction<Offers>('loadOffersNear');

export const loadComments = createAction<Comments>('loadComments');
