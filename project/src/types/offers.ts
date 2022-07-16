export enum FeaturesType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export type Rating = {
  stars: string;
  value: string;
};

export type Features = {
  type: FeaturesType;
  bedrooms: string;
  adults: string;
};

export type Hoster = {
  avatar: string;
  name: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  photo: string;
  name: string;
  description: string;
  isPremium: boolean;
  rating: Rating;
  features: Features;
  price: string;
  whatInside: string[];
  hoster: Hoster;
  isFavorit: boolean;
};

export type Offers = Offer[];
