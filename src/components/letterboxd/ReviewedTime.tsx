import { useLinkWithName } from 'hooks/useLinkWithName';
import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { Review } from 'api/types/letterboxd/Review';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';

interface ReviewedTimeProps {
  movie?: Review;
}
export function ReviewedTime({ movie }: ReviewedTimeProps) {
  const link = useLinkWithName('Letterboxd');

  const formattedDate = useRelativeTimeFormat({
    fromDate: movie?.pubDate,
    capitalized: true,
  });

  return link ? (
    <Typography
      variant="overline"
      component={HorizontalStack}
      sx={{ gap: 1, alignItems: 'center' }}
    >
      {formattedDate}
    </Typography>
  ) : null;
}
