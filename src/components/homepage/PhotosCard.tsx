import { useData } from 'api/useData';
import { FullExpandableCard } from 'components/FullExpandableCard';
import * as React from 'react';
import type { ContentCardProps } from 'components/ContentCard';
import { PhotographyBanner } from 'components/photography/PhotographyBanner';
import { PhotographyContent } from 'components/photography/PhotographyContent';

type PhotosCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function PhotosCard({ turnOnAnimation }: PhotosCardProps) {
  const { data: photos } = useData('photos');

  if (!photos) {
    return null;
  }
  return (
    <FullExpandableCard
      overlay="Photography"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<PhotographyBanner />}
      expandedContent={<PhotographyContent photos={photos} />}
      expandHeight={2}
      expandWidth={3}
    />
  );
}
