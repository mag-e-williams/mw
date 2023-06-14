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
  dateAdded: string;
  shelves: string;
  review: string;
};

export type GoodreadsItem = {
  title: string;
  link: string;
  author: string;
  bookImgUrl: string;
  bookLargeImgUrl: string;
  pubDate: string;
  bookContent: GoodreadsReviewContent;
  contentSnippet: string;
  guid: string;
  isoDate: string;
  userReadAt: string;
  userRating: string;
};
