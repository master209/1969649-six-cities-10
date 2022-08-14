import {createSlice} from '@reduxjs/toolkit';

import {fetchCheckAuth, fetchLogin, fetchLogout} from '../api-actions';

import {UserProcess} from '../../types/state';

import {NameSpace, AuthorizationStatus} from '../../const';

const {Auth, NoAuth, Unknown} = AuthorizationStatus;

const initialState: UserProcess = {
  authorizationStatus: Unknown,
  email: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.fulfilled, (state, {payload}) => {
        const {email} = payload || '';
        state.authorizationStatus = email ? Auth : NoAuth;
        state.email = email ? email : '';
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = NoAuth;
      })
      .addCase(fetchLogin.fulfilled, (state, {payload: {email}}) => {
        state.authorizationStatus = Auth;
        state.email = email;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.authorizationStatus = NoAuth;
        state.email = '';
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.authorizationStatus = NoAuth;
        state.email = '';
      });
  }
});
