import { Link } from 'components/utilComponents/Link';
import { Typography } from '@mui/material';
import { truncated } from 'helpers/truncated';

type ReviewSubTitleProps = {
  content?: string;
  url?: string;
};

export function ReviewSubTitle({ content, url }: ReviewSubTitleProps) {
  return (
    <Typography component="span" variant="body2" sx={truncated(2)}>
      <Link isExternal href={url} linkProps={{ variant: 'body2', color: 'body2' }}>
        {content}
      </Link>
    </Typography>
  );
}
