export type Reviews = {
  name: string;
  review: string;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: Reviews[];
};
