export const lowToHigh = (array: any[]): any[] =>
  array.sort((a,b) =>
    toHigh(Number(a.price),Number(b.price)));

export const highToLow = (array: any[]): any[] =>
  array.sort((a,b) =>
    toLow(Number(a.price),Number(b.price)));

export const topRated = (array: any[]): any[] =>
  array.sort((a,b) =>
    toLow(Number(a.rating.value),Number(b.rating.value)));

export const toHigh = (A: number, B: number): number => {
  if (A < B) {
    return -1;
  }
  if (A > B) {
    return 1;
  }
  return 0;
};

export const toLow = (A: number, B: number): number => {
  if (A < B) {
    return 1;
  }
  if (A > B) {
    return -1;
  }
  return 0;
};
