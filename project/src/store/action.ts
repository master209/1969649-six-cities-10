import {createAction} from '@reduxjs/toolkit';

import {Offers} from '../types/offers';

export const loadOffers = createAction<Offers>('loadOffers');

export const changeCity = createAction<{city: string}>('changeCity');

export const clickSort = createAction('clickSort');

export const changeSort = createAction<{sort: string}>('changeSort');

export const collapseSortList = createAction('collapseSortList');

