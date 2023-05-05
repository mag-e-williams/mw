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
        children: Array<React.ReactElement<{ onClick: () => void }>> | Array<any>;
        theme: Theme;
      }
  );

function Container({ theme, ...props }: Omit<BoxProps, 'sx'> & { theme: Theme }) {
  return (
    <Box
      {...props}
      sx={{
        boxShadow: theme.vars.extraShadows.map.control,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 0,
        overflow: 'hidden',
        display: 'flex',
        width: 'fit-content',
        margin: '26px',
        borderRadius: theme.spacing(6),
        fontSize: '1rem',
        lineHeight: '1',
      }}
    />
  );
}

/**
 * This is what surrounds any control to contain it, automatically responding
 * to the color scheme. Circular and same width/height. Returns either a single
 * container, or a larger container with multiple children in it if necessary.
 */
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
