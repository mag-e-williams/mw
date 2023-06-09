import type { CurrentlyPlaying } from 'api/types/spotify/CurrentlyPlaying';
import type { RecentlyPlayed } from 'api/types/spotify/RecentlyPlayed';
import { Track } from 'api/types/spotify/Track';
import { Episode } from 'api/types/spotify/Episode';
import { spotifyClient } from '../networkClients/spotifyClient';

const CURRENTLY_PLAYING_RESOURCE = 'me/player/currently-playing?additional_types=track,episode';
const RECENTLY_PLAYED_RESOURCE = 'me/player/recently-played?limit=1';

export async function fetchRecentlyPlayed(): Promise<null | Track | Episode> {
  const currentlyPlaying = await spotifyClient.fetch<CurrentlyPlaying>(CURRENTLY_PLAYING_RESOURCE);
  switch (currentlyPlaying.status) {
    case 200: {
      const data = await currentlyPlaying.json();
      return data?.item ?? null;
    }
    case 204: {
      // Fetch the last played song instead
      const recentlyPlayed = await spotifyClient.fetch<RecentlyPlayed>(RECENTLY_PLAYED_RESOURCE);

      if (recentlyPlayed.status !== 200) {
        return null;
      }
      const data = await recentlyPlayed.json();
      const item = data?.items?.[0];
      return item ? { ...item?.track, played_at: item.played_at } : null;
    }
    default:
      // This could be rate limiting, or auth problems, etc.
      return null;
  }
}
