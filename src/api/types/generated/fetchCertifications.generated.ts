import type * as Types from './contentfulApi.generated';

export type CertificationsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CertificationsQuery = {
  readonly sectionCollection:
    | {
        readonly items: ReadonlyArray<
          | {
              readonly contentCollection:
                | {
                    readonly items: ReadonlyArray<
                      | {
                          readonly title: string | undefined;
                          readonly level: string | undefined;
                          readonly description: string | undefined;
                          readonly visible: boolean | undefined;
                          readonly org:
                            | {
                                readonly title: string | undefined;
                                readonly abbreviation: string | undefined;
                                readonly link: { readonly url: string | undefined } | undefined;
                              }
                            | undefined;
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
