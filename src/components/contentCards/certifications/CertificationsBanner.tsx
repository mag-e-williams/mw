import { Stack, Typography } from '@mui/material';
import { FaIcon } from 'components/utilComponents/FaIcon';
import { COLORS } from 'ui/theme/color';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';

export function CertificationsBanner() {
  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Typography
        sx={{
          color: COLORS.SECONDARY,
          paddingTop: 2,
          paddingRight: 0,
        }}
      >
        <FaIcon icon={faAward} size="11em" />
      </Typography>
    </Stack>
  );
}
