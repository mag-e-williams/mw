export type GoodreadsFeed = {
  items: GoodreadsItem[];
};

export type GoodreadsReviewContent = {
  bookUrl: string;
  imgUrl: string;
  author: string;
  name: string;
  averageRating: Number;
  bookPublishedYear: Number;
  userRating: number;
  dateAdded: Date;
  shelves: string;
  review: string;
};

export type GoodreadsItem = {
  title: string;
  link: string;
  pubDate: string;
  content: string | GoodreadsReviewContent;
  contentSnippet: string;
  guid: string;
  isoDate: string;
};
