import {City, Offers} from '../types/offers';

import {OfferType} from '../const';

const {Apartment, Hotel, House, Room} = OfferType;

export const city: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88969,
    zoom: 10
  }
};

export const offers: Offers = [
  {
    id: 1,
    city: {
      name: 'Paris',
      location: {
        'latitude':48.85661,
        'longitude':2.351499,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: 2,
    city: {
      name: 'Paris',
      location: {
        'latitude':48.85661,
        'longitude':2.351499,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: 3,
    city: {
      name: 'Paris',
      location: {
        'latitude':48.85661,
        'longitude':2.351499,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    }
  },
  {
    id: 4,
    city: {
      name: 'Paris',
      location: {
        'latitude':48.85661,
        'longitude':2.351499,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    }
  },


  {
    id: 2,
    city: {
      name: 'Amsterdam',
      location: {
        'latitude':52.37454,
        'longitude':4.897976,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: 3,
    city: {
      name: 'Amsterdam',
      location: {
        'latitude':52.37454,
        'longitude':4.897976,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    }
  },
  {
    id: 1,
    city: {
      name: 'Amsterdam',
      location: {
        'latitude':52.37454,
        'longitude':4.897976,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },


  {
    id: 4,
    city: {
      name: 'Hamburg',
      location: {
        'latitude':53.550341,
        'longitude':10.000654,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    }
  },
  {
    id: 2,
    city: {
      name: 'Hamburg',
      location: {
        'latitude':53.550341,
        'longitude':10.000654,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },


  {
    id: 4,
    city: {
      name: 'Brussels',
      location: {
        'latitude':50.846557,
        'longitude':4.351697,
        'zoom':13
      }
    },
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    }
  },

];
