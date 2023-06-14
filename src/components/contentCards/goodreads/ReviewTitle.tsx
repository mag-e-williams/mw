import { Stack, Typography } from '@mui/material';
import { Link } from 'components/utilComponents/Link';
import { truncated } from 'helpers/truncated';

type ReviewTitleProps = {
  title?: string;
  year?: string;
  url?: string;
};

export function ReviewTitle({ title, year, url }: ReviewTitleProps) {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 0.5,
      }}
    >
      <Link isExternal href={url} linkProps={{ variant: 'h5', color: 'h5' }} sx={truncated(2)}>
        {title}
      </Link>
      <Typography
        variant="caption"
        component="span"
        sx={{
          minWidth: '35px',
        }}
      >
        {year}
      </Typography>
    </Stack>
  );
}
