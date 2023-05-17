import { Link as LinkIcon, Camera } from 'lucide-react';
import { Box, IconButton, Theme, Tooltip } from '@mui/material';
import { useRouter } from 'next/router';

interface NavIconProps {
  page: string;
}

const ICON_SIZE = 16;
const DELAY_MS = 300;

export function NavIcon({ page }: NavIconProps) {
  const router = useRouter();

  const icon = page === 'photos' ? <Camera size={ICON_SIZE} /> : <LinkIcon size={ICON_SIZE} />;

  const iconColor = (theme: Theme) => {
    if (router.asPath.includes('photos')) {
      return theme.vars.palette.secondary.light;
    }
    return theme.vars.palette.text.secondary;
  };

  const routeTo = async () => {
    await router.push('photos');
  };

  return (
    <Tooltip
      title={page}
      enterDelay={DELAY_MS}
      enterTouchDelay={DELAY_MS}
      enterNextDelay={DELAY_MS}
    >
      <span>
        <IconButton
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={routeTo}
          aria-label={page}
          sx={(theme) => ({
            '& svg': {
              transition: theme.transitions.create('transform'),
              transformOrigin: 'center',
            },
          })}
        >
          <Box sx={(theme) => ({ color: iconColor(theme), display: 'flex' })}>{icon}</Box>
        </IconButton>
      </span>
    </Tooltip>
  );
}
