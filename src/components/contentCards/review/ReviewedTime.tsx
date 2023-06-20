import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';

interface ReviewedTimeProps {
  time: string;
  icon?: React.ReactNode;
}
export function ReviewedTime({ time, icon }: ReviewedTimeProps) {
  const formattedDate = useRelativeTimeFormat({
    fromDate: time,
    capitalized: true,
  });

  return (
    <Typography
      variant="overline"
      component={HorizontalStack}
      sx={{ gap: 1, alignItems: 'center' }}
    >
      {`Read ${formattedDate}`}
      {icon}
    </Typography>
  );
}
