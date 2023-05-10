import { useLinkWithName } from 'hooks/useLinkWithName';
import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { Review } from 'api/types/letterboxd/Review';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';

interface LetterboxdLogoProps {
  movie?: Review;
}
export function LetterboxdLogo({ movie }: LetterboxdLogoProps) {
  const link = useLinkWithName('Letterboxd');

  const formattedDate = useRelativeTimeFormat({
    fromDate: movie?.pubDate,
    capitalized: true,
  });

  return link ? (
    <HorizontalStack
      sx={{
        alignItems: 'center',
        gap: 0.5,
      }}
    >
      <Typography variant="caption">{formattedDate}</Typography>
    </HorizontalStack>
  ) : null;
}
