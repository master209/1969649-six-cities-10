export const sortTo = (array: any[], key: string, direction?: string): any[] =>
  array.sort((A, B) => {
    let a: any;
    let b: any;

    key?.split('.')?.forEach((value) => {
      a = (a || A)[value];
      b = (b || B)[value];
    });

    a = +a;
    b = +b;

    /* eslint-disable-next-line */
    return direction === 'desc' ? (a < b ? -1 : a > b ? 1 : 0) : (a < b ? 1 : a > b ? -1 : 0);
  });
