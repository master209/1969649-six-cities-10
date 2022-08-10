import {
  datatype,
  name,
  image,
  lorem,
} from 'faker';

const num = datatype.number(99);

const location = {
  latitude: num,
  longitude: num,
  zoom: num,
};

const strings = new Array(3).fill(null).map(() => lorem.word(1));

export const makeFakeOffer = () => ({
  id: datatype.number(99),
  city: {
    name: lorem.word(1),
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

export const makeFakeOffers = () => (
  new Array(5).fill(null).map(() => makeFakeOffer())
);
