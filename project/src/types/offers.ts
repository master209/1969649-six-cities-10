export enum OfferType {
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
  bedrooms: string;
  adults: string;
  whatInside: string[];
};

export type Hoster = {
  avatar: string;
  name: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  photo: string;
  isPremium: boolean;
  price: string;
  name: string;
  type: OfferType;
  rating: Rating;
  features: Features;
  hoster: Hoster;
  isFavorite: boolean;
};

export type Offers = Offer[];
