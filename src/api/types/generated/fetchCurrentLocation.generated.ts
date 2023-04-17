import type * as Types from './contentfulApi.generated';

export type MyLocationQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyLocationQuery = {
  readonly contentTypeLocation: {
    readonly initialZoom: number | undefined;
    readonly zoomLevels: ReadonlyArray<string | undefined> | undefined;
    readonly point: { readonly latitude: number; readonly longitude: number };
    readonly image:
      | {
          readonly url: string | undefined;
          readonly width: number | undefined;
          readonly height: number | undefined;
        }
      | undefined;
  };
  readonly lightImage: { readonly url: string | undefined } | undefined;
  readonly darkImage: { readonly url: string | undefined } | undefined;
};
