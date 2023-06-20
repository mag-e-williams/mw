import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';
import { Clapperboard, Library } from 'lucide-react';

interface ReviewedTimeProps {
  time: string;
  type: string;
}
export function ReviewedTime({ time, type }: ReviewedTimeProps) {
  const formattedDate = useRelativeTimeFormat({
    fromDate: time,
    capitalized: true,
  });

  const icon = type === 'letterboxd' ? <Clapperboard size="1.25em" /> : <Library size="1.25em" />;
  const timeText = type === 'letterboxd' ? `Watched ${formattedDate}` : `Read ${formattedDate}`;

  return (
    <Typography
      variant="overline"
      component={HorizontalStack}
      sx={{ gap: 0.5, alignItems: 'center' }}
    >
      {timeText} {icon}
    </Typography>
  );
}
