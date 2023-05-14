import { Stack, Typography } from '@mui/material';
import { Review } from 'api/types/letterboxd/Review';
import { Link } from 'components/Link';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { truncated } from '../../helpers/truncated';

type MovieTitleProps = {
  movie?: Review;
  url: string;
};

export function MovieTitle({ movie, url }: MovieTitleProps) {
  const link = useLinkWithName('Spotify', { title: movie?.filmTitle, url });
  const movieTitle = movie?.filmTitle;
  const movieYear = movie?.filmYear;
  return link ? (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        alignItems: 'baseline',
      }}
    >
      <Link
        isExternal
        {...link}
        href={link.url}
        linkProps={{ variant: 'h5', color: 'h5' }}
        sx={truncated(1)}
      >
        {movieTitle}
      </Link>
      <Typography
        variant="caption"
        component="span"
        sx={{
          width: '40px',
        }}
      >
        {movieYear}
      </Typography>
    </Stack>
  ) : (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        alignItems: 'baseline',
      }}
    >
      <Typography variant="h5" component="span">
        {movieTitle}
      </Typography>
      <Typography
        variant="caption"
        component="span"
        sx={{
          width: '40px',
        }}
      >
        {movieYear}
      </Typography>
    </Stack>
  );
}
