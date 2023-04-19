import { isDefinedItem } from 'api/parsers';
import type { MyLocationQuery } from 'api/types/generated/fetchCurrentLocation.generated';
import type { MapLocation } from 'api/types/MapLocation';
import { gql } from 'graphql-request';
import { contentfulClient } from '../networkClients/contentfulClient';

const QUERY = gql`
  query MyLocation {
    contentTypeLocation(id: "5xpsfkR5zrWxAKkS2kUpCc") {
      point {
        latitude: lat
        longitude: lon
      }
      initialZoom
      zoomLevels
      image {
        url(
          transform: {
            width: 170 # MAP_MARKER_IMAGE_SIZE * 2
            height: 170 # MAP_MARKER_IMAGE_SIZE * 2
            format: WEBP
          }
        )
        width
        height
      }
    }
  }
`;

export async function fetchCurrentLocation(): Promise<MapLocation | null> {
  const data = await contentfulClient.request<MyLocationQuery>(QUERY);
  const location = data?.contentTypeLocation;
  if (!location) {
    return null;
  }
  const zoomLevels = location.zoomLevels?.filter(isDefinedItem)?.map(Number) ?? [];
  zoomLevels.sort((a, b) => {
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
  };
}
