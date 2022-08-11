import {userProcess} from './user-process';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {fetchCheckAuth, fetchLogin, fetchLogout} from '../api-actions';

const {Auth, NoAuth, Unknown} = AuthorizationStatus;

const email = 'test11@test.test';
const password = '123456';

describe('Reducer: userProcess', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: Unknown,
      email: ''
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: Unknown, email: ''});
  });

  describe('fetchCheckAuth test', () => {
    it('should update authorizationStatus to "AUTH" if fetchCheckAuth fulfilled and email is not empty', () => {
      expect(userProcess.reducer({...state, email}, { type: fetchCheckAuth.fulfilled.type }))
        .toEqual({authorizationStatus: Auth, email});
    });

    it('should update authorizationStatus to "NO_AUTH" if fetchCheckAuth fulfilled and email is empty', () => {
      expect(userProcess.reducer(state, { type: fetchCheckAuth.fulfilled.type }))
        .toEqual({authorizationStatus: NoAuth, email: ''});
    });

    it('should update authorizationStatus to "NO_AUTH" if fetchCheckAuth rejected', () => {
      expect(userProcess.reducer(state, { type: fetchCheckAuth.rejected.type }))
        .toEqual({authorizationStatus: NoAuth, email: ''});
    });
  });

  describe('fetchLogin test', () => {
    it('should update authorizationStatus to "AUTH" if fetchLogin fulfilled', () => {
      expect(userProcess.reducer(state, {type: fetchLogin.fulfilled.type, payload: {email, password}}))
        .toEqual({authorizationStatus: Auth, email});
    });

    it('should update authorizationStatus to "NO_AUTH" if fetchLogin rejected', () => {
      expect(userProcess.reducer(state, {type: fetchLogin.rejected.type}))
        .toEqual({authorizationStatus: NoAuth, email: ''});
    });
  });

  describe('fetchLogout test', () => {
    it('should update authorizationStatus to "NO_AUTH" if fetchLogout fulfilled', () => {
      expect(userProcess.reducer(state, {type: fetchLogout.fulfilled.type}))
        .toEqual({authorizationStatus: NoAuth, email: ''});
    });
  });
});
