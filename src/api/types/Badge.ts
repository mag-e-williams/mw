import { LinkType as Link } from './Link';

export type BadgeType = {
  title: string | undefined;
  thumbnail: {
    url: string | undefined;
    width: number | undefined;
    height: number | undefined;
  };
  type: string | undefined;
  link: Link;
  visible: boolean;
};
