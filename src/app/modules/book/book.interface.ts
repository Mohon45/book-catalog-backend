export type Reviews = {
  name: string;
  review: string;
};

export type IBook = {
  title: string;
  author: string;
  image: string;
  genre: string;
  publicationDate: string;
  reviews?: Reviews[];
};

export type IBookFilters = {
  searchTerm?: string;
  title?: string;
  author?: string;
  genre?: string;
  publicationDate?: number;
};
