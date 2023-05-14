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
  const starIcon = <FaIcon icon={faStar} />;
  const starIconHalf = <FaIcon icon={faStarHalf} />;

  const stars = [];
  for (let i = 1; i <= rating; i += 1) {
    stars.push(starIcon);
  }
  if (!Number.isInteger(rating)) stars.push(starIconHalf);

  return (
    <Typography variant="overline" component={HorizontalStack} sx={{ alignItems: 'center' }}>
      {stars.map((star, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>{star}</span>
      ))}
    </Typography>
  );
}
