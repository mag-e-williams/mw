import type { Artist } from 'api/types/spotify/Track';
import { Show } from 'api/types/spotify/Episode';
import { Link } from 'components/utilComponents/Link';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { Fragment } from 'react';
import { Typography } from '@mui/material';
import { truncated } from 'helpers/truncated';

type ArtistListProps = {
  artists: Array<Artist> | Array<Show>;
};

interface SeparatorProps {
  index: number;
  fullList: Array<unknown>;
}

const separator = ({ index, fullList }: SeparatorProps) => {
  if (index === fullList.length - 1) {
    // Nothing after the last item!
    return null;
  }
  if (fullList.length === 2) {
    // Only two items in the full list means no commas
    return ' & ';
  }
  return index < fullList.length - 2 ? ', ' : ', & ';
};

export function ArtistList({ artists }: ArtistListProps) {
  const baseLink = useLinkWithName('Spotify');
  const artistLink = ({ name, external_urls }: Artist | Show) => {
    if (!baseLink) {
      return null;
    }
    return { ...baseLink, title: name, url: external_urls.spotify };
  };
  if (!artists) {
    return null;
  }

  return (
    <Typography component="span" variant="body2" sx={truncated(1)}>
      {artists.map((artist, index) => {
        const link = artistLink(artist);
        return (
          <Fragment key={artist.id}>
            {link ? (
              <Link
                isExternal
                {...link}
                href={link.url}
                linkProps={{ variant: 'body2', color: 'body2' }}
              >
                {artist.name}
              </Link>
            ) : (
              <span>{artist.name}</span>
            )}
            <span>{separator({ index, fullList: artists })}</span>
          </Fragment>
        );
      })}
    </Typography>
  );
}
