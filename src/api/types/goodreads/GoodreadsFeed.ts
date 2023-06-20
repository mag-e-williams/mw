export type GoodreadsFeed = {
  items: ReviewItem[];
};

export type ReviewItem = {
  title: string;
  link: string;
  author: string;
  year: string;
  reviewDate: string;
  rating: string;
  imageUrl: string;
  review?: string;
};
