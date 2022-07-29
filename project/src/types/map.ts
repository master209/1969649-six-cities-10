export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  id: number;
  latitude: number;
  longitude: number;
};

export type Points = Point[];

export type CityPoints = {
  [key: string]: Points,
};
