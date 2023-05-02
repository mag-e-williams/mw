import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { useState, useMemo } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { Minimize2, Maximize2 } from 'lucide-react';
import { Control } from 'components/baseControls/Control';
import { FaIcon } from 'components/FaIcon';
import { COLORS } from 'ui/theme/color';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { CertificationsCardContent } from './CertificationsCardContent';
import { CertificationsContentCard } from './CertificationsContentCard';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<CertificationBadge> | undefined;
};

export function FullCertificationsCard({
  certifications,
  turnOnAnimation,
}: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const expandedWidth = 2;
  const expandedHeight = 3;
  const isExpandable = true;

  const expansionControl = useMemo(
    () => (
      <Control
        onClick={isExpanded ? () => setIsExpanded(!isExpanded) : undefined}
        position="top-right"
        theme={theme}
      >
        {isExpanded ? <Minimize2 size="1em" /> : <Maximize2 size="1em" />}
      </Control>
    ),
    [isExpanded, theme],
  );

  return (
    <CertificationsContentCard
      expandable={isExpandable}
      isExpanded={isExpanded}
      onExpansion={setIsExpanded}
      turnOnAnimation={turnOnAnimation}
      expandedWidth={expandedWidth}
      expandedHeight={expandedHeight}
      overlay="Certifications"
    >
      {isExpanded ? expansionControl : undefined}
      {isExpanded ? (
        <CertificationsCardContent certifications={certifications} />
      ) : (
        <Stack
          sx={{
            flex: 1,
            gap: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Typography
            sx={{
              color: COLORS.SECONDARY,
              paddingTop: 2,
              paddingRight: isExpanded ? 3 : undefined,
            }}
          >
            <FaIcon icon={faAward} size={isExpanded ? '0em' : '11em'} />
          </Typography>
        </Stack>
      )}
    </CertificationsContentCard>
  );
}
