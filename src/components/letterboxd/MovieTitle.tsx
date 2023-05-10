import { Stack, Typography } from '@mui/material';
import { Review } from 'api/types/letterboxd/Review';
import { Link } from 'components/Link';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { SxProps } from 'ui/theme';
import { truncated } from '../../helpers/truncated';
import { mixinSx } from '../../ui/helpers/mixinSx';

type MovieTitleProps = {
  movie?: Review;
  url: string;
  sx?: SxProps;
};

export function MovieTitle({ movie, url, sx }: MovieTitleProps) {
  const link = useLinkWithName('Spotify', { title: movie?.filmTitle, url });
  const movieTitle = movie?.filmTitle;
  const movieYear = movie?.filmYear;
  const mixedSx = mixinSx(truncated(2), sx);
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
        sx={mixedSx}
      >
        {movieTitle}
      </Link>
      <Typography variant="caption" component="span" sx={mixedSx}>
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
      <Typography variant="h5" component="span" sx={mixedSx}>
        {movieTitle}
      </Typography>
      <Typography variant="caption" component="span" sx={mixedSx}>
        {movieYear}
      </Typography>
    </Stack>
  );
}
