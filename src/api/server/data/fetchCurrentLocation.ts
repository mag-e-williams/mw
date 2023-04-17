import { isDefinedItem } from 'api/parsers';
import type { MyLocationQuery } from 'api/types/generated/fetchCurrentLocation.generated';
import type { MapLocation } from 'api/types/MapLocation';

export const data: MyLocationQuery = {
  contentTypeLocation: {
    image: {
      url: '/icons/memoji/mw-clouds.png',
      width: 40,
      height: 40,
    },
    point: {
      latitude: 40.73199280335488,
      longitude: -73.99353341685632,
    },
    initialZoom: 10.9,
    zoomLevels: ['2', '7', '14', '21'],
  },
  lightImage: {
    url: 'maps/map-light.png',
  },
  darkImage: {
    url: 'maps/map-dark.png',
  },
};

export function fetchCurrentLocation(): MapLocation | null {
  const location = data?.contentTypeLocation;
  if (!location || !data?.lightImage?.url || !data?.darkImage?.url) {
    return null;
  }
  const zoomLevels = location.zoomLevels?.filter(isDefinedItem)?.map(Number) ?? [];
  zoomLevels.sort((a: number, b: number) => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  });
  return {
    point: location.point,
    initialZoom: location.initialZoom,
    image: location.image,
    zoomLevels,
    backupImageUrls: { light: data.lightImage.url, dark: data.darkImage.url },
  };
}
