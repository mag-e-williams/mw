import { useLinkWithName } from 'hooks/useLinkWithName';
import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';
import { GoodreadsItem } from 'api/types/goodreads/GoodreadsFeed';
import { Library } from 'lucide-react';

interface ReviewedTimeProps {
  book?: GoodreadsItem;
}
export function ReviewedTime({ book }: ReviewedTimeProps) {
  const link = useLinkWithName('Goodreads');
  const formattedDate = useRelativeTimeFormat({
    fromDate: book?.userReadAt,
    capitalized: true,
  });

  return link ? (
    <Typography
      variant="overline"
      component={HorizontalStack}
      sx={{ gap: 1, alignItems: 'center' }}
    >
      {`Read ${formattedDate}`}
      <Library size="1.25em" />
    </Typography>
  ) : null;
}
