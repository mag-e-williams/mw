/**
 * This is what Spotify's refresh token API returns, as raw data
 */
export type RawSpotifyToken = {
  token_type: string;
  access_token: string;
  expires_in: number;
};
