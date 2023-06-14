import { fetchFooterLinks } from './server/contentful/fetchFooterLinks';
import { fetchIntroContent } from './server/contentful/fetchIntroContent';
import { fetchCurrentLocation } from './server/contentful/fetchCurrentLocation';
import { fetchProjects } from './server/contentful/fetchProjects';
import { fetchRecentlyPlayed } from './server/spotify/fetchRecentlyPlayed';
import { fetchCertifications } from './server/contentful/fetchCertifications';
import { fetchRepoVersion } from './server/github/fetchRepoVersion';
import { fetchPhotos } from './server/aws/fetchPhotos';
import { fetchRecentlyReviewed } from './server/letterboxd/fetchRecentlyReviewed';
import { fetchRecentlyRead } from './server/goodreads/fetchRecentlyRead';

export type EndpointParams = {
  page?: number;
  perPage?: number;
  startAfter?: string;
};

/**
 * All possible types of endpoints we could request
 */
export type EndpointKey = keyof typeof endpoints;

/**
 * Returns the endpoint's return type given a generic `EndpointKey`
 */
export type EndpointType<Key extends EndpointKey> = ReturnType<typeof endpoints[Key]>;

/**
 * Convenience type for the awaited version of the endpoint's return type
 */
export type AwaitedType<Key extends EndpointKey> = Awaited<EndpointType<Key>>;

export const endpoints = {
  intro: fetchIntroContent,
  location: fetchCurrentLocation,
  projects: fetchProjects,
  footer: fetchFooterLinks,
  certifications: fetchCertifications,
  'latest/track': fetchRecentlyPlayed,
  version: fetchRepoVersion,
  photos: (startAfter?: string) => fetchPhotos(startAfter),
  'latest/movies': fetchRecentlyReviewed,
  'latest/goodreads': fetchRecentlyRead,
} as const;

/**
 * Typeguard for narrowing a possible key into a well typed endpoint key
 */
export const isValid = (possibleKey: string | undefined): possibleKey is EndpointKey =>
  typeof possibleKey === 'string' && Object.keys(endpoints).includes(possibleKey);
