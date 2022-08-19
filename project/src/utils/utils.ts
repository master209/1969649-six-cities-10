import {Order} from '../const';

export const sortTo = (array: any[], key: string, direction?: string): any[] =>
  array.sort((rawA, rawB) => {
    let a: any;
    let b: any;

    key?.split('.')?.forEach((value) => {
      a = (a || rawA)[value];
      b = (b || rawB)[value];
    });

    a = isNaN(+a) ? a : +a;
    b = isNaN(+b) ? b : +b;

    /* eslint-disable-next-line */
    return direction === Order.Asc ? (a < b ? -1 : a > b ? 1 : 0) : (a < b ? 1 : a > b ? -1 : 0);
  });

// преобразует массив объектов в коллекцию объектов с ключом byKey
export const convertArrayToMap = (arr:any, byKey: string) =>
  arr.reduce((acc: any, next: any) =>
    ({...acc, [next[byKey]]: next}), {});

const ID_LEN = 4;
// генерит уникальный числовой ID длиной ID_LEN
export const getUniqueId = (len = ID_LEN): number =>
  parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(len).toString().replace('.', ''), 10);

export const getFormattedDate = (date: string) =>
  new Date(date).toLocaleDateString('en', { month: 'long', year: 'numeric'});

export const getStarsClass = (rating: number) => ({width: `${roundRating(rating)}%`});

const roundRating = (rating: number) => Math.round(rating) * 20;

export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

// приводит булево значение isFavorite к инвертированному числовому значению offerStatus (0/1)
export const getOfferStatus = (isFavorite: boolean): number => +!isFavorite;
