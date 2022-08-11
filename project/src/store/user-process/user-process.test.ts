import {userProcess} from './user-process';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {fetchCheckAuth, fetchLogin, fetchLogout} from '../api-actions';

describe('Reducer: userProcess', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      email: ''
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  describe('fetchCheckAuth test', () => {
    it('should update authorizationStatus to "AUTH" if fetchCheckAuth fulfilled', () => {
      expect(userProcess.reducer(state, { type: fetchCheckAuth.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    });
    it('should update authorizationStatus to "NO_AUTH" if fetchCheckAuth rejected', () => {
      expect(userProcess.reducer(state, { type: fetchCheckAuth.rejected.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('fetchLogin test', () => {
    it('should update authorizationStatus to "AUTH" if fetchLogin fulfilled', () => {
      expect(userProcess.reducer(state, { type: fetchLogin.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    });
    it('should update authorizationStatus to "NO_AUTH" if fetchLogin rejected', () => {
      expect(userProcess.reducer(state, { type: fetchLogin.rejected.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('fetchLogout test', () => {
    it('should update authorizationStatus to "NO_AUTH" if fetchLogout fulfilled', () => {
      expect(userProcess.reducer(state, { type: fetchLogout.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });
});
