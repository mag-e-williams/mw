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
