import type * as Types from './contentfulApi.generated';

export type IntroContentQueryVariables = Types.Exact<{ [key: string]: never }>;

export type IntroContentQuery = {
  readonly sectionCollection:
    | {
        readonly items: ReadonlyArray<
          | {
              readonly contentCollection:
                | {
                    readonly items: ReadonlyArray<
                      | {
                          readonly headshot:
                            | {
                                readonly url: string | undefined;
                                readonly width: number | undefined;
                                readonly height: number | undefined;
                              }
                            | undefined;
                          readonly textBlock:
                            | {
                                readonly json: any;
                                readonly links: {
                                  readonly entries: {
                                    readonly inline: ReadonlyArray<
                                      | {
                                          readonly title: string | undefined;
                                          readonly url: string | undefined;
                                          readonly icon: string | undefined;
                                        }
                                      | {}
                                      | undefined
                                    >;
                                    readonly block: ReadonlyArray<
                                      | {
                                          readonly title: string | undefined;
                                          readonly url: string | undefined;
                                          readonly icon: string | undefined;
                                        }
                                      | {}
                                      | undefined
                                    >;
                                  };
                                  readonly assets: {
                                    readonly block: ReadonlyArray<
                                      | {
                                          readonly url: string | undefined;
                                          readonly title: string | undefined;
                                          readonly width: number | undefined;
                                          readonly height: number | undefined;
                                          readonly description: string | undefined;
                                          readonly sys: { readonly id: string };
                                        }
                                      | undefined
                                    >;
                                  };
                                };
                              }
                            | undefined;
                          readonly introLinksCollection:
                            | {
                                readonly items: ReadonlyArray<
                                  | {
                                      readonly title: string | undefined;
                                      readonly url: string | undefined;
                                      readonly icon: string | undefined;
                                    }
                                  | undefined
                                >;
                              }
                            | undefined;
                        }
                      | {}
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};
