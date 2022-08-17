import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {createAPI} from '../services/api';
import {
  fetchLoadOffers,
  fetchLoadOffersNear,
  fetchLoadComments,
  fetchLoadFavorites,
  fetchFavoriteStatus,
  fetchCheckAuth,
  fetchLogin,
  fetchLogout
} from './api-actions';

import {State} from '../types/state';
import {AuthData} from '../types/auth-data';
import {APIRoute} from '../const';

import {makeFakeOffers} from '../utils';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const email = 'test@test.ru';

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

    await store.dispatch(fetchCheckAuth(email));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCheckAuth.pending.type,
      fetchCheckAuth.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = {email: 'test@test.ru', password: '123456'};

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

    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-email', 'test@test.ru');
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

    expect(Storage.prototype.removeItem).toBeCalledTimes(2);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-email');
  });

  it('should dispatch LoadOffers when GET /offers', async () => {
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

  it('should reject when GET /offers return 401', async () => {
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(401);

    const store = mockStore();
    await store.dispatch(fetchLoadOffers('Paris'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLoadOffers.pending.type,
      fetchLoadOffers.rejected.type,
    ]);
  });

  it('should dispatch LoadOffersNear when GET /offers/id/nearby', async () => {
    const mockOffers = makeFakeOffers();
    const offerId = mockOffers[0].id.toString();

    mockAPI
      .onGet(APIRoute.Offers.concat('/', offerId, '/nearby'))
      .reply(200, {mockOffers});

    const store = mockStore();
    await store.dispatch(fetchLoadOffersNear(offerId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLoadOffersNear.pending.type,
      fetchLoadOffersNear.fulfilled.type
    ]);
  });

  it('should dispatch LoadComments when GET /comments/id', async () => {
    const mockOffers = makeFakeOffers();
    const offerId = mockOffers[0].id.toString();

    mockAPI
      .onGet(APIRoute.Comments.concat('/', offerId))
      .reply(200, {mockOffers});

    const store = mockStore();
    await store.dispatch(fetchLoadComments(offerId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLoadComments.pending.type,
      fetchLoadComments.fulfilled.type
    ]);
  });

  it('should dispatch LoadFavorites when GET /favorite', async () => {
    const mockOffers = makeFakeOffers();

    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, {mockOffers});

    const store = mockStore();
    await store.dispatch(fetchLoadFavorites());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLoadFavorites.pending.type,
      fetchLoadFavorites.fulfilled.type
    ]);
  });

  it('should dispatch fetchFavoriteStatus when POST /favorite/status', async () => {
    const mockOffers = makeFakeOffers();
    const offerId = mockOffers[0].id;
    const offerStatus = 1;

    mockAPI
      .onPost(APIRoute.Favorite.concat('/', offerId.toString(), '/', offerStatus.toString()))
      .reply(200, {data: mockOffers, offerStatus});

    const store = mockStore();
    await store.dispatch(fetchFavoriteStatus({offerId, offerStatus}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteStatus.pending.type,
      fetchFavoriteStatus.fulfilled.type
    ]);
  });
});
