import { Stack, Typography } from '@mui/material';
import { Review } from 'api/types/letterboxd/Review';
import { Link } from 'components/utilComponents/Link';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { truncated } from '../../../helpers/truncated';

type MovieTitleProps = {
  movie?: Review;
  url: string;
};

export function MovieTitle({ movie, url }: MovieTitleProps) {
  const link = useLinkWithName('Spotify', { title: movie?.filmTitle, url });
  const movieTitle = movie?.filmTitle;
  const movieYear = movie?.filmYear;
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 0.5,
      }}
    >
      <Link
        isExternal
        {...link}
        href={link?.url}
        linkProps={{ variant: 'h5', color: 'h5' }}
        sx={truncated(1)}
      >
        {movieTitle}
      </Link>
      <Typography
        variant="caption"
        component="span"
        sx={{
          minWidth: '35px',
        }}
      >
        {movieYear}
      </Typography>
    </Stack>
  );
}
