import type { MapLocation } from 'api/types/MapLocation';
import { useEffect, useMemo, useRef } from 'react';
import { AttributionControl, Map as MapGL, MapRef } from 'react-map-gl';
import { Box, useTheme } from '@mui/material';
import { useColorScheme } from 'hooks/useColorScheme';
// import { StandardControls } from './StandardControls';
import { Stack } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';

import { BadgeType as Badge } from 'api/types/Badge';
import { CertificationCard } from './CertificationCard';

export type Props = {
  /**
   * Where we're centered and zoomed
   */
  certifications: Array<Badge> | null;

  // setCenterLocation: () => void;

  /**
   * If the map is a larger height
   */
  isExpanded: boolean;
};

const LIGHT_STYLE = 'mapbox://styles/margretwilliams42/clg5bwt7c000801p7ozlt32zb?optimize=true';
const DARK_STYLE = 'mapbox://styles/margretwilliams42/clg7ot4a600bv01o2gurrfzit?optimize=true';

/**
 * This wrapper ensures we pad ctrls and override button defaults, plus includes
 * all of the relevant Mapbox CSS we need. Also hides the map until it's fully loaded so
 * we can show a fallback image before it's loaded.
 */

/**
 * Uses Mapbox to show a canvas-based map of my current location.
 */
export function Certifications({ certifications, isExpanded }: Props) {
  const theme = useTheme();
  const mapRef = useRef<MapRef>(null);
  // const { colorScheme } = useColorScheme();

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

  // This will be used to set zoom levels, eventually
  // const initialViewState = useMemo(
  //   () => ({
  //     latitude: location?.point?.latitude ?? 0,
  //     longitude: location?.point?.longitude ?? 0,
  //     zoom: location?.initialZoom ?? 0,
  //   }),
  //   [location?.initialZoom, location?.point?.latitude, location?.point?.longitude],
  // );
  // const zoomLevels = location?.zoomLevels ?? [];
  // const minZoom = zoomLevels[0];
  // const maxZoom = zoomLevels[zoomLevels.length - 1];
  // console.log('children', children);
  const certificationCards =
    certifications?.map((cert) => <CertificationCard key={cert.title} {...cert} />) ?? [];

  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1,
        justifyContent: 'space-between',
      }}
    >
      <HorizontalStack
        sx={{
          justifyContent: 'space-between',
        }}
      >
        {certificationCards}
      </HorizontalStack>
    </Stack>
  );
}
