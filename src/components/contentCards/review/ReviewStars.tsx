import { HorizontalStack } from 'ui/HorizontalStack';
import { Typography } from '@mui/material';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons/faStarHalf';

import { FaIcon } from 'components/utilComponents/FaIcon';

type ReviewStarsProps = {
  numStars?: number | string;
};

export function ReviewStars({ numStars }: ReviewStarsProps) {
  const rating = Number(numStars);
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
