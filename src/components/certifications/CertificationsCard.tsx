// import type { Project } from 'api/types/generated/contentfulApi.generated';
import { BadgeType as Badge } from 'api/types/Badge';
import type { ContentCardProps } from 'components/ContentCard';
import { ContentCard } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState, useMemo } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { COLORS } from 'ui/theme/color';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { FaIcon } from 'components/FaIcon';
import { IconButton, Typography, useTheme } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { Maximize2, Minimize2 } from 'lucide-react';
import { Control } from 'components/certifications/Control';
import { ControlContainerProps } from 'components/maps/ControlContainer';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<Badge>;
};

function notEmpty(str: string | undefined): boolean {
  return !(str == null) && !(str === '');
  return true;
}

/**
 * Uses the `ContentCard` to show a project's details
 */
export function CertificationsCard({ certifications, turnOnAnimation }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes, verticalSpan, horizontalSpan } = useCurrentImageSizes();
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const expansionControl = useMemo(
    () => (
      <Control
        onClick={isExpanded ? () => setIsExpanded(false) : undefined}
        position="top-right"
        theme={theme}
      >
        {isExpanded ? <Minimize2 size="1em" /> : <Maximize2 size="1em" />}
      </Control>
      // <IconButton aria-label="expand"
      //   onClick={isExpanded ? () => setIsExpanded(false) : undefined}
      //   sx={() => ({
      //     bgcolor: COLORS.PRIMARY,
      //     position: 'absolute',
      //     margin: 2,
      //     right: 0,
      //     color: COLORS.LIGHT.CARD_BACKGROUND,
      //   })}
      // >
      //   {isExpanded ? <Minimize2 size="1em" /> : <Maximize2 size="1em" />}
      // </IconButton>
    ),
    [isExpanded, theme],
  );

  return (
    <ContentCard
      verticalSpan={verticalSpan}
      horizontalSpan={horizontalSpan}
      onExpansion={!isExpanded ? setIsExpanded : undefined}
      overlay="Certifications"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      turnOnAnimation={turnOnAnimation}
      sx={() => ({
        bgcolor: COLORS.PRIMARY,
        [theme.breakpoints.down('md')]: {
          maxHeight: theme.shape.gridItemSize(0.75),
        },
      })}
    >
      {expansionControl}

      <HoverableContainer isHovered={isHovered}>
        <HorizontalStack
          sx={{
            flex: 1,
            gap: 1,
            justifyContent: 'space-between',
          }}
        >
          <Typography />
          <Typography
            sx={{
              color: COLORS.LIGHT.CARD_BACKGROUND,
              paddingTop: 2,
            }}
          >
            <FaIcon icon={faAward} size="11em" />
          </Typography>
        </HorizontalStack>
      </HoverableContainer>
    </ContentCard>
  );
}
