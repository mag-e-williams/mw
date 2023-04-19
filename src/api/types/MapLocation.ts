import type { MyLocationQuery } from 'api/types/generated/fetchCurrentLocation.generated';

export type MapLocation = Pick<
  NonNullable<MyLocationQuery['contentTypeLocation']>,
  'point' | 'initialZoom' | 'image'
> & {
  zoomLevels: Array<number>;
};
