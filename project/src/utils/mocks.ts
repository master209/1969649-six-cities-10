import {configureMockStore} from '@jedmao/redux-mock-store';
import {datatype, name, image, lorem} from 'faker';

import {AuthorizationStatus, cities} from '../const';

import {uniqueId} from './utils';

const mockStore = configureMockStore();

const num = datatype.number(99);

const location = {
  latitude: num,
  longitude: num,
  zoom: num,
};

const strings = new Array(3).fill(null).map(() => lorem.word());

export const makeFakeOffer = () => ({
  id: uniqueId(),
  city: {
    name: cities[Math.floor(Math.random() * cities.length)],
    location,
  },
  previewImage: image.imageUrl(),
  images: strings,
  isPremium: false,
  price: datatype.number(9999),
  title: name.title(),
  type: lorem.word(),
  rating: datatype.number(5),
  bedrooms: datatype.number(3),
  maxAdults: datatype.number(10),
  goods: strings,
  host: {
    avatarUrl: image.avatar(),
    name: name.title(),
    isPro: false,
  },
  isFavorite: false,
  description: lorem.words(5),
  location
});

export const makeFakeOffers = () => new Array(10).fill(null).map(() => makeFakeOffer());

export const mockOffers = makeFakeOffers();
export const mockOffer = makeFakeOffer();

export const makeFakeComment = () => ({
  id: uniqueId(),
  comment: lorem.words(5),
  date: lorem.word(),
  rating: datatype.number(5),
  user: {
    avatarUrl: image.avatar(),
    name: name.title(),
    isPro: false,
  },
});

export const makeFakeCommentNew = () => ({
  id: uniqueId(),
  comment: lorem.words(5),
  rating: datatype.number(5),
});

export const makeFakeComments = () => new Array(3).fill(null).map(() => makeFakeComment());


export const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  MAIN: {offers: mockOffers},
  OFFER: {offer: mockOffer},
  FAVORITE: {favorites: []},
});
