export type ReviewQuery = {
  title: string;
  link: string;
  guid: unknown;
  pubDate: string;
  'letterboxd:watchedDate': string;
  'letterboxd:rewatch': string;
  'letterboxd:filmTitle': string;
  'letterboxd:filmYear': string;
  'letterboxd:memberRating': string;
  description: string;
  'dc:creator': string;
};

export type Review = {
  title?: string;
  link?: string;
  pubDate?: string;
  watchedDate?: string;
  rewatch?: string;
  filmTitle?: string;
  filmYear?: string;
  rating?: string;
  img?: string;
  review?: string;
  creator?: string;
};
