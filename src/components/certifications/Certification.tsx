import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { Card } from '@mui/material';
import { Image } from 'components/Image';

type CertificationProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certification: CertificationBadge;
};

export function Certification({ certification }: CertificationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes } = useCurrentImageSizes();

  const openInNewTab = (url: string | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => openInNewTab(certification?.link?.url)}
      sx={() => ({
        padding: 2,
        bgcolor: 'transparent',
        border: 'none',
      })}
    >
      <HoverableContainer isHovered={isHovered}>
        <Image
          url={certification?.thumbnail?.url}
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
