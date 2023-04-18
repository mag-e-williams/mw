import { useTheme } from '@mui/material';
import { Minus, Plus, LocateFixed } from 'lucide-react';
import type { RefObject } from 'react';
import type { MapRef } from 'react-map-gl';
import { Location } from 'api/types/mockData/Location';
import { Control } from './Control';

interface Props {
  mapRef: RefObject<MapRef>;
}

export function StandardControls({ mapRef }: Props) {
  const theme = useTheme();
  const zoom = (inward: boolean) => (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    (inward ? mapRef.current?.zoomIn : mapRef.current?.zoomOut)?.();
    event.stopPropagation();
    event.preventDefault();
  };

  const center = () => (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const locationData = Location.contentTypeLocation;
    const point = locationData?.point;
    if (point?.latitude && point?.longitude) {
      mapRef.current?.flyTo({
        center: [point.longitude, point.latitude],
        zoom: locationData?.initialZoom,
      });
    }
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <>
      <Control position="top-left" theme={theme}>
        <Plus size="1em" onClick={zoom(true)} />
        <Minus size="1em" onClick={zoom(false)} />
      </Control>
      <Control position="bottom-right" theme={theme}>
        <LocateFixed size="1em" onClick={center()} />
      </Control>
    </>
  );
}
