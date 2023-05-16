import { Box, BoxProps, Theme } from '@mui/material';
import { Children } from 'react';

export type ControlContainerProps = Pick<React.ComponentProps<'div'>, 'className'> &
  (
    | {
        onClick: (() => void) | undefined;
        children: React.ReactElement<{ onClick?: never }> | string | boolean;
        theme: Theme;
      }
    | {
        onClick?: never;
        children: Array<React.ReactElement<{ onClick: () => void }>> | Array<unknown>;
        theme: Theme;
      }
  );

function Container({ theme, ...props }: Omit<BoxProps, 'sx'> & { theme: Theme }) {
  return (
    <Box
      {...props}
      sx={{
        // boxShadow: theme.vars.extraShadows.map.control,
        position: 'absolute',
        zIndex: 1,
        top: props?.className?.includes('top-right') ? 0 : '50%',
        right: props?.className?.includes('right') ? 0 : undefined,
        left: props?.className?.includes('left') ? 0 : undefined,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        margin: props?.className?.includes('top') ? '26px' : undefined,
        marginX: props?.className?.includes('top') ? undefined : '10px',
        borderRadius: theme.spacing(6),
        fontSize: '1rem',
        lineHeight: '1',
        transform: props?.className?.includes('top') ? undefined : 'translateY(-50%)',
      }}
    />
  );
}

export function ControlContainer({ onClick, children, className, theme }: ControlContainerProps) {
  const controlSx = {
    display: 'flex',
    fontSize: '1rem',
    lineHeight: 1,
    padding: '0.5rem',
    cursor: 'pointer',
    color: theme.vars.palette.text.primary,
    backgroundColor: theme.vars.palette.background.default,
    transition: theme.transitions.create(['background-color', 'color']),
    ':hover': {
      backgroundColor: theme.vars.palette.secondary.main,
      color: theme.vars.palette.secondary.contrastText,
    },
  };

  return (
    <Container
      className={className}
      onClick={!Array.isArray(children) ? onClick : undefined}
      theme={theme}
    >
      {Array.isArray(children) ? (
        Children.map(children, (child) => (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          <Box sx={controlSx} onClick={child.props.onClick}>
            {child}
          </Box>
        ))
      ) : (
        <Box sx={controlSx} onClick={onClick}>
          {children}
        </Box>
      )}
    </Container>
  );
}
