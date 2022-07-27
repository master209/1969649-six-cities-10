import {Order} from './const';

export const sortTo = (array: any[], key: string, direction?: string): any[] =>
  array.sort((rawA, rawB) => {
    let a: any;
    let b: any;

    key?.split('.')?.forEach((value) => {
      a = (a || rawA)[value];
      b = (b || rawB)[value];
    });

    a = +a;
    b = +b;

    /* eslint-disable-next-line */
    return direction === Order.ASC ? (a < b ? -1 : a > b ? 1 : 0) : (a < b ? 1 : a > b ? -1 : 0);
  });
