import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';
import { Clapperboard, Library } from 'lucide-react';

interface ReviewedTimeProps {
  time: string;
  type: string;
  rewatch?: boolean;
}
export function ReviewedTime({ time, type, rewatch }: ReviewedTimeProps) {
  const formattedDate = useRelativeTimeFormat({
    fromDate: time,
    capitalized: true,
  });

  const icon = type === 'letterboxd' ? <Clapperboard size="1.25em" /> : <Library size="1.25em" />;

  const getTimeText = () => {
    const text: string[] = [];
    if (rewatch) {
      text.push('re');
    }
    if (type === 'letterboxd') {
      text.push('watched');
    } else {
      text.push('read');
    }
    return text.join('');
  };

  const timeText = `${getTimeText()} ${formattedDate}`;

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
