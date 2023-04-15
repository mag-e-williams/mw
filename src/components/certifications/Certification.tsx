// import type { Project } from 'api/types/generated/contentfulApi.generated';
import { BadgeType as Badge } from 'api/types/Badge';
import type { ContentCardProps } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { Card, useTheme } from '@mui/material';
import { Image } from 'components/Image';

type CertificationProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certification: Badge;
};

export function Certification({ certification, turnOnAnimation }: CertificationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes } = useCurrentImageSizes();

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => openInNewTab(certification.link.url)}
      sx={() => ({
        padding: 2,
        bgcolor: 'transparent',
        border: 'none',
      })}
    >
      <HoverableContainer isHovered={isHovered}>
        <Image
          url={certification.thumbnail.url}
          width={width}
          height={height}
          alt={certification.title ?? 'Certification Badge'}
          priority
          sizes={sizes}
        />
      </HoverableContainer>
    </Card>
  );
}
