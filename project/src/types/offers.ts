export type User = {
  avatarUrl: string;
  name: string;
  isPro?: boolean;
};

export type Offer = {
  id: number;
  city: City;
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
  location: Location;
};

export type Offers = Offer[];

export type Comment = {
  id: number;
  comment: string;
  date: string
  rating: string;
  user: User;
}

export type CommentNew = {
  offerId: number;
  comment: string;
  rating: number;
}

export type Comments = Comment[];

export type CommentFormData = {
  comment: string;
  rating: number
};

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Locations = Location[];
