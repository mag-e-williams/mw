import { authenticatedRestClient } from './authenticatedRestClient';

const ACCESS_TYPE = 'spotify';
const ENDPOINT = 'https://api.spotify.com/v1';

export const spotifyClient = authenticatedRestClient(ENDPOINT, ACCESS_TYPE);
