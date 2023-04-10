import { LinkType } from './Link';

export type ProjectType = {
  title: string | undefined;
  creationDate: string | undefined;
  type: string | undefined;
  link: LinkType;
  layout: string | undefined;
  thumbnail: {
    url: string | undefined;
    width: number | undefined;
    height: number | undefined;
  };
  description: {
    json: string | undefined;
  };
};
