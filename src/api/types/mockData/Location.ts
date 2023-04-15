import { MyLocationQuery } from '../generated/fetchCurrentLocation.generated';

export const Location: MyLocationQuery = {
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
