export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  id: string;
  lat: number;
  lng: number;
};

export type Points = Point[];

export type CityPoints = {
  [key: string]: Points,
};

export type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
  className: string;
};
