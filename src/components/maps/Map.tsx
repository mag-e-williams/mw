import type { MapLocation } from 'api/types/MapLocation';
import { useEffect, useMemo, useRef } from 'react';
import { Map as MapGL, MapRef } from 'react-map-gl';
import { Box, useTheme } from '@mui/material';
import { useColorScheme } from 'hooks/useColorScheme';
import { StandardControls } from './StandardControls';

export type Props = {
  /**
   * Where we're centered and zoomed
   */
  location: MapLocation | null;

  /**
   * If the map is a larger height
   */
  isExpanded: boolean;

  /**
   * If children exist, they need to be real elements.
   * Use this to pass layers and features.
   */
  children?: React.ReactElement | Array<React.ReactElement> | null;

  /**
   * If the map itself has loaded (controlled via state above)
   */
  isLoaded: boolean;

  /**
   * Set that the map has loaded properly
   */
  setMapHasLoaded: () => void;
};

const LIGHT_STYLE = 'mapbox://styles/margretwilliams42/clg5bwt7c000801p7ozlt32zb?optimize=true';
const DARK_STYLE = 'mapbox://styles/margretwilliams42/clg7ot4a600bv01o2gurrfzit?optimize=true';

/**
 * This wrapper ensures we pad ctrls and override button defaults, plus includes
 * all of the relevant Mapbox CSS we need. Also hides the map until it's fully loaded so
 * we can show a fallback image before it's loaded.
 */
function Wrapper({ isLoaded, children }: { isLoaded: boolean; children: React.ReactElement }) {
  return (
    <Box
      sx={(theme) => ({
        ...(!isLoaded && { visibility: 'hidden' }),
        position: 'relative',
        pointerEvents: 'visible',
        height: '100%',
        width: '100%',
        '& .mapboxgl-map': {
          fontSize: 12,
        },
        '& .mapboxgl-canvas-container': {
          cursor: 'grab',
          userSelect: 'none',
        },
        '& .mapboxgl-marker': {
          position: 'absolute',
          top: 0,
          left: 0,
          willChange: 'transform',
        },
        '& .mapboxgl-control-container': {
          '& > *': {
            position: 'absolute',
            pointerEvents: 'none',
          },
        },
        '& .mapboxgl-ctrl-top-left': {
          top: 0,
          left: 0,
        },
        '& .mapboxgl-ctrl-top-right': {
          top: 0,
          right: 0,
        },
        '& .mapboxgl-ctrl-bottom-right': {
          bottom: 0,
          right: 0,
        },
        '& .mapboxgl-ctrl-bottom-left': {
          bottom: 0,
          left: 0,
        },
        '& .mapboxgl-ctrl': {
          margin: theme.spacing(3.25),
          pointerEvents: 'auto',
        },
        '& .mapboxgl-ctrl.mapboxgl-ctrl-attrib': {
          padding: theme.spacing(0.25, 1.5),
          backgroundColor: theme.vars.palette.background.paper,
          borderRadius: 8,
          a: {
            ...theme.typography.caption,
            color: theme.vars.palette.text.secondary,
            textDecoration: 'none',
          },
        },
        '& .mapboxgl-ctrl-attrib-button': {
          display: 'none',
        },
        '& .mapboxgl-ctrl-logo': {
          width: '88px',
          height: '23px',
          margin: '0 0 -4px -4px',
          display: 'block',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
          overflow: 'hidden',
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E %3Cdefs%3E %3Cpath id='logo' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E %3Cpath id='text' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E %3C/defs%3E %3Cmask id='clip'%3E %3Crect x='0' y='0' width='100%25' height='100%25' fill='white'/%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/mask%3E %3Cg id='outline' opacity='0.3' stroke='%23000' stroke-width='3'%3E %3Ccircle mask='url(%23clip)' cx='11.5' cy='11.5' r='9.25'/%3E %3Cuse xlink:href='%23text' mask='url(%23clip)'/%3E %3C/g%3E %3Cg id='fill' opacity='0.9' fill='%23fff'%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/g%3E %3C/svg%3E\")",
        },
      })}
    >
      {children}
    </Box>
  );
}

/**
 * Uses Mapbox to show a canvas-based map of my current location.
 */
export function Map({ location, children, isExpanded, isLoaded, setMapHasLoaded }: Props) {
  const theme = useTheme();
  const mapRef = useRef<MapRef>(null);
  const { colorScheme } = useColorScheme();

  /**
   * Ensures we resize when expanding/collapsing so we repaint the canvas. Otherwise it'll appear
   * very stretched until you interact with the map. It ensures we wait the animation duration,
   * then repaint.
   */
  useEffect(() => {
    let animationId: number;
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(() => mapRef.current?.resize());
    }, theme.transitions.duration.standard);
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
    };
  }, [isExpanded, theme.transitions.duration.standard]);

  const initialViewState = useMemo(
    () => ({
      latitude: location?.point?.latitude ?? 0,
      longitude: location?.point?.longitude ?? 0,
      zoom: location?.initialZoom ?? 0,
    }),
    [location?.initialZoom, location?.point?.latitude, location?.point?.longitude],
  );

  const zoomLevels = location?.zoomLevels ?? [];
  const minZoom = zoomLevels[0];
  const maxZoom = zoomLevels[zoomLevels.length - 1];
  return (
    <Wrapper isLoaded={isLoaded}>
      <MapGL
        ref={mapRef}
        initialViewState={initialViewState}
        minZoom={minZoom}
        maxZoom={maxZoom}
        attributionControl={false}
        logoPosition="bottom-left"
        interactive
        pitchWithRotate={false}
        touchPitch={false}
        mapStyle={colorScheme.mode === 'dark' ? DARK_STYLE : LIGHT_STYLE}
        styleDiffing={false}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onLoad={setMapHasLoaded}
        reuseMaps
      >
        <StandardControls mapRef={mapRef} {...initialViewState} />
        {children}
      </MapGL>
    </Wrapper>
  );
}
