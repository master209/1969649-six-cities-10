import {createSlice} from '@reduxjs/toolkit';

import {fetchCheckAuth, fetchLogin, fetchLogout} from '../api-actions';

import {UserProcess} from '../../types/state';

import {NameSpace, AuthorizationStatus} from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchLogin.fulfilled, (state, {payload: {email}}) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = email;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.email = '';
      });
  }
});
