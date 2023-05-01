import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { ContentCard } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState, useMemo } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { COLORS } from 'ui/theme/color';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { FaIcon } from 'components/FaIcon';
import { Typography, useTheme, Stack } from '@mui/material';
import { Minimize2 } from 'lucide-react';
import { Control } from 'components/baseControls/Control';
import { CertificationsCardContent } from './CertificationsCardContent';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<CertificationBadge> | undefined;
};

/**
 * Uses the `ContentCard` to show a project's details
 */

export function CertificationsCard({ certifications, turnOnAnimation }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { verticalSpan, horizontalSpan } = useCurrentImageSizes();
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const expandedWidth = 2;
  const expandedHeight = 3;
  const expansionControl = useMemo(
    () =>
      isExpanded && (
        <Control
          onClick={isExpanded ? () => setIsExpanded(false) : undefined}
          position="top-right"
          theme={theme}
        >
          <Minimize2 size="1em" />
        </Control>
      ),
    [isExpanded, theme],
  );

  return (
    <ContentCard
      verticalSpan={verticalSpan}
      horizontalSpan={horizontalSpan}
      isExpanded={isExpanded}
      onExpansion={!isExpanded ? setIsExpanded : undefined}
      overlay="Certifications"
      expandedWidth={expandedWidth}
      expandedHeight={expandedHeight}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      turnOnAnimation={turnOnAnimation}
      sx={() => ({
        [theme.breakpoints.down('md')]: {
          maxHeight: theme.shape.gridItemSize(0.75),
        },
      })}
    >
      {expansionControl}

      {isExpanded ? (
        <CertificationsCardContent certifications={certifications} />
      ) : (
        <HoverableContainer isHovered={isHovered}>
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
        </HoverableContainer>
      )}
    </ContentCard>
  );
}
