import {createReducer} from '@reduxjs/toolkit';

import {changeLocation} from './action';

// import {offers} from '../mocks/offers'

const initialState = {
  activeLocation: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.activeLocation = action.payload.location;
    });
});

export {reducer};
