import {createAction} from '@reduxjs/toolkit';

export const changeLocation = createAction<{location: string}>('changeLocation');
