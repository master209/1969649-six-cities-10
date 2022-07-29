export type Features = {
  bedrooms: string;
  adults: string;
  whatInside: string[];
};

export type User = {
  avatar: string;
  name: string;
  isPro?: boolean;
};

export type Offer = {
  id: string;
  photo: string;
  isPremium: boolean;
  price: string;
  name: string;
  type: string;
  rating: string;
  features: Features;
  hoster: User;
  isFavorite: boolean;
};

export type Offers = Offer[];

export type CityOffers = {
  [key: string]: Offers,
};

export type Review = {
  id: string;
  user: User;
  rating: string;
  text: string;
  time: string
}

export type Reviews = Review[];
