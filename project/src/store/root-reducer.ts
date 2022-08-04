import {combineReducers} from '@reduxjs/toolkit';

import {userProcess} from './user-process/user-process';
import {mainProcess} from './main-process/main-process';
import {offerData} from './offer-data/offer-data';
import {favoriteData} from './favorite-data/favorite-data';

import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Main]: mainProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
});
