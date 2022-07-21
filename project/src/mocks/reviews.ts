import {Reviews} from '../types/offers';

export const reviews: Reviews = [
  {
    id: '1',
    user: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max'
    },
    rating: {
      stars: '80%',
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    time: 'April 2019'
  },
  {
    id: '2',
    user: {
      avatar: 'img/avatar-max.jpg',
      name: 'Mafusail'
    },
    rating: {
      stars: '100%',
    },
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    time: 'November 2020'
  }
];
