import type * as Types from './contentfulApi.generated';

export type ProjectsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ProjectsQuery = {
  readonly sectionCollection:
    | {
        readonly items: ReadonlyArray<
          | {
              readonly contentCollection:
                | {
                    readonly items: ReadonlyArray<
                      | {
                          readonly title: string | undefined;
                          readonly description: string | undefined;
                          readonly layout: string | undefined;
                          readonly creationDate: any | undefined;
                          readonly link: { readonly url: string | undefined } | undefined;
                          readonly thumbnail:
                            | {
                                readonly url: string | undefined;
                                readonly width: number | undefined;
                                readonly height: number | undefined;
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
