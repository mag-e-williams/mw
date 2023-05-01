import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { ControlContainer, ControlContainerProps } from './ControlContainer';

type ControlProps = ControlContainerProps & {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const CLASSNAME = 'content-card-ctrl';

/**
 * Returns a no-op component that adds a control to the map in a given
 * position of the map (corners).
 */
export function Control({ position, ...props }: ControlProps) {
  const theme = useTheme(); // as much of this is class based, we need to grab the theme this way
  const properProps = useMemo(
    () => ({
      ...props,
      theme,
      className: props.className ? `${props.className} ${CLASSNAME}` : CLASSNAME,
    }),
    [props, theme],
  );

  return <ControlContainer {...properProps} />;
}
