export const lowToHigh = (array: any[]): any[] =>
  array.sort((a,b) => {
    const A = Number(a.price);
    const B = Number(b.price);

    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  });

export const highToLow = (array: any[]): any[] =>
  array.sort((a,b) => {
    const A = Number(a.price);
    const B = Number(b.price);

    if (A < B) {
      return 1;
    }
    if (A > B) {
      return -1;
    }
    return 0;
  });

export const topRated = (array: any[]): any[] =>
  array.sort((a,b) => {
    const A = Number(a.rating.value);
    const B = Number(b.rating.value);

    if (A < B) {
      return 1;
    }
    if (A > B) {
      return -1;
    }
    return 0;
  });

