import { HorizontalStack } from 'ui/HorizontalStack';
import { Typography } from '@mui/material';
import type { Review } from 'api/types/letterboxd/Review';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons/faStarHalf';

import { FaIcon } from 'components/FaIcon';

type ReviewStarsProps = {
  review?: Review;
};

export function ReviewStars({ review }: ReviewStarsProps) {
  const rating = Number(review?.rating);
  const star = <FaIcon icon={faStar} />;
  const starHalf = <FaIcon icon={faStarHalf} />;

  const stars = [];
  for (let i = 1; i < rating; i += 1) {
    stars.push(star);
  }
  if (!Number.isInteger(rating)) stars.push(starHalf);

  return (
    <Typography
      variant="overline"
      component={HorizontalStack}
      sx={{ gap: 0, alignItems: 'center', marginBottom: 0.5 }}
    >
      {stars}
    </Typography>
  );
}
