import {configureMockStore} from '@jedmao/redux-mock-store';
import {datatype, name, image, lorem} from 'faker';

import {AuthorizationStatus, cities} from '../const';

import {getUniqueId} from './utils';

export const mockStore = configureMockStore();

const num = datatype.number(99);

export const location = {
  latitude: num,
  longitude: num,
  zoom: num,
};

const mockStrings = new Array(3).fill(null).map(() => lorem.word());

export const mockCity = {
  name: cities[Math.floor(Math.random() * cities.length)],
  location,
};

export const makeFakeOffer = () => ({
  id: getUniqueId(),
  city: mockCity,
  previewImage: image.imageUrl(),
  images: mockStrings,
  isPremium: false,
  price: datatype.number(9999),
  title: name.title(),
  type: lorem.word(),
  rating: datatype.number(5),
  bedrooms: datatype.number(3),
  maxAdults: datatype.number(10),
  goods: mockStrings,
  host: {
    avatarUrl: image.avatar(),
    name: name.title(),
    isPro: false,
  },
  isFavorite: false,
  description: lorem.words(5),
  location
});

export const makeFakeOffers = () => new Array(5).fill(null).map(() => makeFakeOffer());

export const mockOffers = makeFakeOffers();
export const mockOffer = makeFakeOffer();

export const makeFakeComment = () => ({
  offerId: getUniqueId(),
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
  offerId: getUniqueId(),
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
