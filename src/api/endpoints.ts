import { fetchFooterLinks } from './server/data/fetchFooterLinks';
import { fetchIntroContent } from './server/data/fetchIntroContent';
import { fetchCurrentLocation } from './server/data/fetchCurrentLocation';
import { fetchProjects } from './server/data/fetchProjects';
import { fetchRecentlyPlayed } from './server/spotify/fetchRecentlyPlayed';
import { fetchCertifications } from './server/data/fetchCertifications';

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
} as const;

/**
 * Typeguard for narrowing a possible key into a well typed endpoint key
 */
export const isValid = (possibleKey: string | undefined): possibleKey is EndpointKey =>
  typeof possibleKey === 'string' && Object.keys(endpoints).includes(possibleKey);
