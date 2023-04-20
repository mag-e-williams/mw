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
                                  readonly assets: {
                                    readonly block: ReadonlyArray<
                                      | {
                                          readonly title: string | undefined;
                                          readonly url: string | undefined;
                                        }
                                      | undefined
                                    >;
                                  };
                                  readonly entries: {
                                    readonly inline: ReadonlyArray<
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | { readonly sys: { readonly id: string } }
                                      | undefined
                                    >;
                                  };
                                };
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
