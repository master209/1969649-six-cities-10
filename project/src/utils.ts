export const sortToHigh = (array: any[], key: string): any[] =>
  array.sort(({[key]: a}, {[key]: b}) =>
    isNaN(+a - +b) ? a.localeCompare(b) : +a - +b
  );

export const sortToLow = (array: any[], key: string): any[] =>
  array.sort(({[key]: a}, {[key]: b}) =>
    isNaN(+a - +b) ? b.localeCompare(a) : +b - +a
  );

export const sortRated = (array: any[], key1: string, key2: string): any[] =>
  array.sort(({[key1]: a}, {[key1]: b}) =>
    +(b[key2]) - +(a[key2]));
