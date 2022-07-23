export type Rating = {
  stars: string;
  value?: string;
};

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
  locations: string,
  photo: string;
  isPremium: boolean;
  price: string;
  name: string;
  type: string;
  rating: Rating;
  features: Features;
  hoster: User;
  isFavorite: boolean;
};

export type Offers = Offer[];

export type Review = {
  id: string;
  user: User;
  rating: Rating;
  text: string;
  time: string
}

export type Reviews = Review[];
