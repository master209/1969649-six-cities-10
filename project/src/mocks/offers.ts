import {CityOffers} from '../types/offers';

import {OfferType} from '../const';

const {Apartment, Hotel, House, Room} = OfferType;

export const cityOffers: CityOffers = {
  Paris: [
    {
      id: 1,
      previewImage: 'img/apartment-01.jpg',
      isPremium: true,
      price: 120,
      title: 'Beautiful & luxurious apartment at great location',
      type: Apartment,
      rating: 4.8,
      bedrooms: 3,
      maxAdults: 4,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
    {
      id: 2,
      previewImage: 'img/room.jpg',
      isPremium: false,
      price: 80,
      title: 'Wood and stone place',
      type: Room,
      rating: 4,
      bedrooms: 2,
      maxAdults: 3,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: false
      },
      isFavorite: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
    {
      id: 3,
      previewImage: 'img/apartment-02.jpg',
      isPremium: false,
      price: 132,
      title: 'Canal View Prinsengracht',
      type: Hotel,
      rating: 4.9,
      bedrooms: 6,
      maxAdults: 9,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
    {
      id: 4,
      previewImage: 'img/apartment-03.jpg',
      isPremium: true,
      price: 180,
      title: 'Nice, cozy, warm big bed apartment',
      type: House,
      rating: 5,
      bedrooms: 6,
      maxAdults: 12,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    }
  ],

  Amsterdam: [
    {
      id: 2,
      previewImage: 'img/room.jpg',
      isPremium: false,
      price: 80,
      title: 'Wood and stone place',
      type: Room,
      rating: 4.1,
      bedrooms: 2,
      maxAdults: 3,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: false
      },
      isFavorite: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
    {
      id: 3,
      previewImage: 'img/apartment-02.jpg',
      isPremium: false,
      price: 132,
      title: 'Canal View Prinsengracht',
      type: Hotel,
      rating: 4.9,
      bedrooms: 6,
      maxAdults: 9,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
    {
      id: 1,
      previewImage: 'img/apartment-01.jpg',
      isPremium: true,
      price: 120,
      title: 'Beautiful & luxurious apartment at great location',
      type: Apartment,
      rating: 4.8,
      bedrooms: 3,
      maxAdults: 4,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
  ],

  Hamburg: [
    {
      id: 4,
      previewImage: 'img/apartment-03.jpg',
      isPremium: true,
      price: 180,
      title: 'Nice, cozy, warm big bed apartment',
      type: House,
      rating: 5,
      bedrooms: 6,
      maxAdults: 12,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
    {
      id: 2,
      previewImage: 'img/room.jpg',
      isPremium: false,
      price: 80,
      title: 'Wood and stone place',
      type: Room,
      rating: 4,
      bedrooms: 2,
      maxAdults: 3,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: false
      },
      isFavorite: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
  ],

  Brussels: [
    {
      id: 4,
      previewImage: 'img/apartment-03.jpg',
      isPremium: true,
      price: 180,
      title: 'Nice, cozy, warm big bed apartment',
      type: House,
      rating: 5,
      bedrooms: 6,
      maxAdults: 12,
      goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
      host: {
        avatarUrl: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    },
  ],

};
