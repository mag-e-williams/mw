export type BadgeType = {
  title: string | undefined;
  thumbnail: {
    url: string | undefined;
  };
  link: {
    url: string;
  };
  visible: boolean;
};
