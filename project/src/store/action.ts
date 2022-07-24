import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{city: string}>('changeCity');
export const loadOffers = createAction('loadOffers');
export const loadPoints = createAction('loadPoints');
