import { useLinkWithName } from 'hooks/useLinkWithName';
import { Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { useRelativeTimeFormat } from 'hooks/useRelativeTimeFormat';
import { GoodreadsItem } from 'api/types/goodreads/GoodreadsFeed';

interface ReviewedTimeProps {
  book?: GoodreadsItem;
}
export function ReviewedTime({ book }: ReviewedTimeProps) {
  const link = useLinkWithName('Goodreads');
  console.log(book);
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
    </Typography>
  ) : null;
}
