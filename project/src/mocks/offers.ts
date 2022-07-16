import {Offers, FeaturesType} from '../types/offers';

export const offers: Offers = [
  {
    id: '1aeeihfusdfsd',
    photo: 'img/room.jpg',
    name: 'Beautiful & luxurious apartment at great location',
    description: '',
    isPremium: true,
    rating: {
      stars: '80',
      value: '4.8'
    },
    features: {
      type: FeaturesType.Apartment,
      bedrooms: '3',
      adults: '4'
    },
    price: '120',
    whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    hoster: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorit: false
  },
  {
    id: '2bzfsdfueufaske',
    photo: 'img/apartment-01.jpg',
    name: 'Wood and stone place',
    description: '',
    isPremium: false,
    rating: {
      stars: '60',
      value: '4.4'
    },
    features: {
      type: FeaturesType.Room,
      bedrooms: '2',
      adults: '3'
    },
    price: '80',
    whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Cabel TV'],
    hoster: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorit: true
  },
  {
    id: '3cruufdsjfdsj',
    photo: 'img/apartment-03.jpg',
    name: 'Canal View Prinsengracht',
    description: '',
    isPremium: false,
    rating: {
      stars: '80',
      value: '4.8'
    },
    features: {
      type: FeaturesType.Hotel,
      bedrooms: '6',
      adults: '9'
    },
    price: '132',
    whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    hoster: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorit: false
  },
  {
    id: '4drfilfgkdfxm',
    photo: 'img/studio-01.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    description: '',
    isPremium: true,
    rating: {
      stars: '100',
      value: '5.5'
    },
    features: {
      type: FeaturesType.House,
      bedrooms: '2',
      adults: '2'
    },
    price: '80',
    whatInside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge'],
    hoster: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false
    },
    isFavorit: true
  },
];
