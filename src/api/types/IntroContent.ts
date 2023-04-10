export type IntroContentType = {
  textBlock: {
    content: {
      title: string | undefined;
      body: Array<string> | undefined;
    };
  };
  image: {
    url: string | undefined;
    width: number | undefined;
    height: number | undefined;
    title: string | undefined;
  };
};
