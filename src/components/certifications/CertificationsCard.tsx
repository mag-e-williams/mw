// import type { Project } from 'api/types/generated/contentfulApi.generated';
import { BadgeType as Badge } from 'api/types/Badge';
import type { ContentCardProps } from 'components/ContentCard';
import { ContentCard } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState } from 'react';
import { Image } from 'components/Image';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { COLORS } from 'ui/theme/color';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { FaIcon } from 'components/FaIcon';
import { Card, Typography } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';

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
  return (
    <ContentCard
      hasImage={false}
      verticalSpan={verticalSpan}
      horizontalSpan={horizontalSpan}
      overlay="Certifications"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      turnOnAnimation={turnOnAnimation}
      sx={(theme) => ({
        bgcolor: COLORS.PRIMARY,
        [theme.breakpoints.down('md')]: {
          maxHeight: theme.shape.gridItemSize(0.75),
        },
      })}
    >
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
