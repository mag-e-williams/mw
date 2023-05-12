export type Photo = {
  url: string;
  title?: string;
  tags?: Array<string>;
  lastModified?: string;
};

export type Photos = {
  bannerImg?: Photo;
  photos: Array<Photo>;
};
