import { useTheme } from '@mui/material';
import { Minus, Plus, LocateFixed } from 'lucide-react';
import type { RefObject } from 'react';
import type { MapRef } from 'react-map-gl';
import { Control } from './Control';

interface Props {
  mapRef: RefObject<MapRef>;
  latitude: number;
  longitude: number;
  zoom: number;
}

export function StandardControls({ mapRef, latitude, longitude, zoom }: Props) {
  const theme = useTheme();
  const zoomTo = (inward: boolean) => (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    (inward ? mapRef.current?.zoomIn : mapRef.current?.zoomOut)?.();
    event.stopPropagation();
    event.preventDefault();
  };

  const center = () => (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (latitude && longitude) {
      mapRef.current?.flyTo({
        center: [longitude, latitude],
        zoom,
      });
    }
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <>
      <Control position="top-left" theme={theme}>
        <Plus size="1em" onClick={zoomTo(true)} />
        <Minus size="1em" onClick={zoomTo(false)} />
      </Control>
      <Control position="bottom-right" theme={theme}>
        <LocateFixed size="1em" onClick={center()} />
      </Control>
    </>
  );
}
