import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { ControlContainer, ControlContainerProps } from './ControlContainer';

type ControlProps = ControlContainerProps & {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right' | 'left';
};

const CLASSNAME = 'content-card-ctrl';

export function Control({ position, ...props }: ControlProps) {
  const theme = useTheme();
  const properProps = useMemo(
    () => ({
      ...props,
      theme,
      className: props.className ? `${props.className} ${CLASSNAME}` : `${CLASSNAME}-${position}`,
    }),
    [props, theme, position],
  );

  return <ControlContainer {...properProps} />;
}
