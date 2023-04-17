export type IntroContentType = {
  textBlock: {
    content: {
      title: string | undefined;
      body: Array<string> | undefined;
    };
  };
  image: {
    url: string | undefined;
    title: string | undefined;
  };
};
