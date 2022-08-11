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
export const arrayToMap = (arr:any, byKey: string) =>
  arr.reduce((acc: any, next: any) =>
    ({...acc, [next[byKey]]: next}), {});

export const uniqueId = (len = 4) =>
  parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(len).toString().replace('.', ''), 10);
