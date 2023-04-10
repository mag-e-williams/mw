import type { ContentCardProps } from 'components/ContentCard';
import { Maximize2, Minimize2, LocateFixed } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Certifications } from 'components/certifications/Certifications';
import { Control } from 'components/maps/Control';
import { MapLocation } from 'api/types/MapLocation';
import { BadgeType as Badge } from 'api/types/Badge';
import { useTheme } from '@mui/material';
// import { MapContentCard } from './MapContentCard';
import { CertContentCard } from 'components/certifications/CertContentCard';

type FullCertCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<Badge>;
  backgroundImageUrl: string | null;
};

export function FullCertCard({
  turnOnAnimation,
  certifications,
  backgroundImageUrl,
}: FullCertCardProps) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

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
    <CertContentCard
      isExpanded={isExpanded}
      onExpansion={!isExpanded ? setIsExpanded : undefined}
      backgroundImageUrl={backgroundImageUrl}
      turnOnAnimation={turnOnAnimation}
    >
      <Certifications
        certifications={certifications}
        isExpanded={isExpanded}
        // isLoaded={hasMapLoaded}
        // setMapHasLoaded={() => setHasMapLoaded(true)}
        // setCenterLocation={() => setCenterLocation(true)}
      >
        {expansionControl}
      </Certifications>
    </CertContentCard>
  );
}
