export type Reviews = {
  name: string;
  review: string;
};

export type IUser = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: Reviews[];
};
