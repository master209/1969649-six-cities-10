import {CityOffers} from '../types/offers';

import {OfferType} from '../const';

const {Apartment, Hotel, House, Room} = OfferType;

export const cityOffers: CityOffers = {
  Paris: [
    {
      id: '1aeeihfusdfsd',
      photo: 'img/apartment-01.jpg',
      isPremium: true,
      price: '120',
      name: 'Beautiful & luxurious apartment at great location',
      type: Apartment,
      rating: {
        stars: '80%',
        value: '4.8'
      },
      features: {
        bedrooms: '3',
        adults: '4',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    },
    {
      id: '2bzfsdfueufaske',
      photo: 'img/room.jpg',
      isPremium: false,
      price: '80',
      name: 'Wood and stone place',
      type: Room,
      rating: {
        stars: '60%',
        value: '4'
      },
      features: {
        bedrooms: '2',
        adults: '3',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: false
      },
      isFavorite: true
    },
    {
      id: '3cruufdsjfdsj',
      photo: 'img/apartment-02.jpg',
      isPremium: false,
      price: '132',
      name: 'Canal View Prinsengracht',
      type: Hotel,
      rating: {
        stars: '80%',
        value: '4.8'
      },
      features: {
        bedrooms: '6',
        adults: '9',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    },
    {
      id: '4drfilfgkdfxm',
      photo: 'img/apartment-03.jpg',
      isPremium: true,
      price: '180',
      name: 'Nice, cozy, warm big bed apartment',
      type: House,
      rating: {
        stars: '100%',
        value: '5.5'
      },
      features: {
        bedrooms: '6',
        adults: '12',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    }
  ],

  Amsterdam: [
    {
      id: '2bzfsdfueufaske',
      photo: 'img/room.jpg',
      isPremium: false,
      price: '80',
      name: 'Wood and stone place',
      type: Room,
      rating: {
        stars: '60%',
        value: '4'
      },
      features: {
        bedrooms: '2',
        adults: '3',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: false
      },
      isFavorite: true
    },
    {
      id: '3cruufdsjfdsj',
      photo: 'img/apartment-02.jpg',
      isPremium: false,
      price: '132',
      name: 'Canal View Prinsengracht',
      type: Hotel,
      rating: {
        stars: '80%',
        value: '4.8'
      },
      features: {
        bedrooms: '6',
        adults: '9',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    },
    {
      id: '1aeeihfusdfsd',
      photo: 'img/apartment-01.jpg',
      isPremium: true,
      price: '120',
      name: 'Beautiful & luxurious apartment at great location',
      type: Apartment,
      rating: {
        stars: '80%',
        value: '4.8'
      },
      features: {
        bedrooms: '3',
        adults: '4',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    },
  ],

  Hamburg: [
    {
      id: '4drfilfgkdfxm',
      photo: 'img/apartment-03.jpg',
      isPremium: true,
      price: '180',
      name: 'Nice, cozy, warm big bed apartment',
      type: House,
      rating: {
        stars: '100%',
        value: '5.5'
      },
      features: {
        bedrooms: '6',
        adults: '12',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    },
    {
      id: '2bzfsdfueufaske',
      photo: 'img/room.jpg',
      isPremium: false,
      price: '80',
      name: 'Wood and stone place',
      type: Room,
      rating: {
        stars: '60%',
        value: '4'
      },
      features: {
        bedrooms: '2',
        adults: '3',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV']
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: false
      },
      isFavorite: true
    },
  ],

  Brussels: [
    {
      id: '4drfilfgkdfxm',
      photo: 'img/apartment-03.jpg',
      isPremium: true,
      price: '180',
      name: 'Nice, cozy, warm big bed apartment',
      type: House,
      rating: {
        stars: '100%',
        value: '5.5'
      },
      features: {
        bedrooms: '6',
        adults: '12',
        whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
      },
      hoster: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      isFavorite: false
    },
  ],

};
