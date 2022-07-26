export const sortToHigh = (array: any[], key: string): any[] =>
  array.sort(({[key]: a}, {[key]: b}) =>
    Number(a) - Number(b));

export const sortToLow = (array: any[], key: string): any[] =>
  array.sort(({[key]: a}, {[key]: b}) =>
    Number(b) - Number(a));

export const sortRated = (array: any[], key1: string, key2: string): any[] =>
  array.sort(({[key1]: a}, {[key1]: b}) =>
    Number(b[key2]) - Number(a[key2]));
