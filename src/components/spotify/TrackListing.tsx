import { Track } from 'api/types/spotify/Track';
import { Episode } from 'api/types/spotify/Episode';
import { Stack } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { AlbumImage } from './AlbumImage';
import { ArtistList } from './ArtistList';
import { SpotifyLogo } from './SpotifyLogo';
import { PlaybackStatus } from './PlaybackStatus';
import { TrackTitle } from './TrackTitle';

interface TrackListingProps {
  /**
   * Has to exist, the track to list
   */
  track: Track | Episode;

  /**
   * If this is true, it puts a logo to the left of the album art
   */
  hasLogo?: boolean;
}

/**
 * Shows a listing for one track, with an optional logo to the left of the album art,
 * plus support for sizing the album art. For responsive album art, this needs to take
 * up the full height of its parent!
 */
export function TrackListing({ track, hasLogo }: TrackListingProps) {
  const trackUrl = track.external_urls.spotify;
  const { name: trackTitle } = track;
  let trackImage;
  let artistName;

  if (track.type === 'episode') {
    trackImage = <AlbumImage album={track.show} />;
    artistName = <ArtistList artists={[track.show]} />;
  } else if (track.type == 'track') {
    trackImage = <AlbumImage album={track.album} />;
    artistName = <ArtistList artists={track.artists} />;
  }

  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1,
        justifyContent: 'space-between',
      }}
    >
      <HorizontalStack
        sx={{
          justifyContent: 'space-between',
        }}
      >
        {hasLogo && <SpotifyLogo url={trackUrl} trackTitle={trackTitle} />}
        {trackImage}
      </HorizontalStack>
      <Stack>
        <PlaybackStatus playedAt={track.played_at} />
        <TrackTitle trackTitle={trackTitle} url={trackUrl} sx={{ marginBottom: 1 }} />
        {artistName}
      </Stack>
    </Stack>
  );
}
