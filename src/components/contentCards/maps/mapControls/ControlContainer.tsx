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
        children:
          | Array<React.ReactElement<{ onClick: () => void }>>
          | React.ReactElement<{ onClick?: never }>;
        theme: Theme;
      }
  );

function Container({ theme, ...props }: Omit<BoxProps, 'sx'> & { theme: Theme }) {
  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        borderRadius: theme.spacing(6),
        fontSize: '1rem',
        lineHeight: '1',
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
