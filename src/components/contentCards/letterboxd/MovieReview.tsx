import { Link } from 'components/utilComponents/Link';
import { Typography } from '@mui/material';
import { truncated } from 'helpers/truncated';
import { Review } from 'api/types/letterboxd/Review';

type MovieReviewProps = {
  movieReview?: Review;
};

export function MovieReview({ movieReview }: MovieReviewProps) {
  return (
    <Typography component="span" variant="body2" sx={truncated(2)}>
      <Link isExternal href={movieReview?.link} linkProps={{ variant: 'body2', color: 'body2' }}>
        {movieReview?.review}
      </Link>
    </Typography>
  );
}
