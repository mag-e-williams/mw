import { Review } from './Review';

type Link = {
  $: {
    href: string;
    rel: string;
    type: string;
  };
};

export type RecentlyReviewed = {
  title: string[];
  link: string[];
  description: string[];
  'atom:link': Array<Link>;
  item: Array<Review>;
};
