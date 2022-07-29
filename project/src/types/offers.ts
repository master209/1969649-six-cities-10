export type User = {
  avatarUrl: string;
  name: string;
  isPro?: boolean;
};

export type Offer = {
  id: number;
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: User;
  isFavorite: boolean;
  description: string;
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
