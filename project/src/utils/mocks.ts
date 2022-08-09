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


const images = new Array(3).fill(null).map(() => lorem.word(1));
const goods = new Array(3).fill(null).map(() => lorem.word(1));

export const makeFakeOffer = () => ({
  id: num,
  city: {
    name: lorem.word(1),
    location,
  },
  previewImage: image.imageUrl(),
  images,
  isPremium: false,
  price: num,
  title: name.title(),
  type: lorem.word(),
  rating: num,
  bedrooms: num,
  maxAdults: num,
  goods,
  host: {
    avatarUrl: image.avatar(),
    name: name.title(),
    isPro: false,
  },
  isFavorite: false,
  description: lorem.words(5),
  location
});

