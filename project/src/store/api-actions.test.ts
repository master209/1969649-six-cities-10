import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {createAPI} from '../services/api';
import {fetchLoadOffers, fetchCheckAuth, fetchLogin, fetchLogout} from './api-actions';

import {State} from '../types/state';
import {AuthData} from '../types/auth-data';
import {APIRoute} from '../const';

import {makeFakeOffers} from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCheckAuth());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCheckAuth.pending.type,
      fetchCheckAuth.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(fetchLogin(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLogin.pending.type,
      fetchLogin.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(fetchLogout());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLogout.pending.type,
      fetchLogout.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch LoadOffers when GET /Offers', async () => {
    const mockOffers = makeFakeOffers();

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, {data: mockOffers, activeCity: 'Paris'});

    const store = mockStore();
    await store.dispatch(fetchLoadOffers('Paris'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLoadOffers.pending.type,
      fetchLoadOffers.fulfilled.type
    ]);
  });
});
