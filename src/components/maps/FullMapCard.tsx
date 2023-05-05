import type { ContentCardProps } from 'components/ContentCard';
import { Maximize2, Minimize2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Map } from 'components/maps/Map';
import { Marker } from 'components/maps/Marker';
import { Control } from 'components/maps/Control';
import { MapLocation } from 'api/types/MapLocation';
import { useTheme } from '@mui/material';
import { MapContentCard } from './MapContentCard';

type FullMapCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  location: MapLocation | undefined | null;
};

export function FullMapCard({ turnOnAnimation, location }: FullMapCardProps) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasMapLoaded, setHasMapLoaded] = useState(false);
  const expandedWidth = 3;
  const expandedHeight = 1;
  const isExpandable = true;

  const expansionControl = useMemo(
    () => (
      <Control
        onClick={isExpanded ? () => setIsExpanded(false) : undefined}
        position="top-right"
        theme={theme}
      >
        {isExpanded ? <Minimize2 size="1em" /> : <Maximize2 size="1em" />}
      </Control>
    ),
    [isExpanded, theme],
  );

  return (
    <MapContentCard
      expandable={isExpandable}
      isExpanded={isExpanded}
      onExpansion={setIsExpanded}
      turnOnAnimation={turnOnAnimation}
      expandedWidth={expandedWidth}
      expandedHeight={expandedHeight}
    >
      {location && location.point && (
        <Map
          location={location}
          isExpanded={isExpanded}
          isLoaded={hasMapLoaded}
          setMapHasLoaded={() => setHasMapLoaded(true)}
        >
          {expansionControl}
          <Marker key="home" point={location.point} image={location.image} />
        </Map>
      )}
    </MapContentCard>
  );
}
