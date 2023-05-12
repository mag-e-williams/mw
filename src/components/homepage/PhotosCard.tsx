import { useData } from 'api/useData';
import { FullExpandableCard } from 'components/FullExpandableCard';
import * as React from 'react';
import type { ContentCardProps } from 'components/ContentCard';
import { PhotographyBanner } from 'components/photography/PhotographyBanner';
import { PhotographyContent } from 'components/photography/PhotographyContent';
import { Project } from 'api/types/generated/contentfulApi.generated';

type PhotosCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photoBanner?: Project;
};

export function PhotosCard({ turnOnAnimation, photoBanner }: PhotosCardProps) {
  const { data: photos } = useData('photos');

  if (!photos) {
    return null;
  }
  return (
    <FullExpandableCard
      overlay="Photography"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<PhotographyBanner photoBanner={photoBanner} />}
      expandedContent={<PhotographyContent photos={photos} />}
      expandHeight={2}
      expandWidth={3}
    />
  );
}
