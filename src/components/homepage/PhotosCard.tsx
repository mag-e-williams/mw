import { useDataWithParams } from 'api/useData';
import { FullExpandableCard } from 'components/FullExpandableCard';
import * as React from 'react';
import type { ContentCardProps } from 'components/ContentCard';
import { PhotographyBanner } from 'components/photography/PhotographyBanner';
import { PhotographyContent } from 'components/photography/PhotographyContent';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { EndpointParams } from 'api/endpoints';
import { Photo } from 'api/types/photos/Photo';

type PhotosCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photoBanner?: Project;
};

export function PhotosCard({ turnOnAnimation, photoBanner }: PhotosCardProps) {
  const params: EndpointParams = {
    page: 0,
  };

  const { data: photos } = useDataWithParams('photos', params);

  if (!photos) {
    return null;
  }
  return (
    <FullExpandableCard
      overlay="Photography"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<PhotographyBanner photoBanner={photoBanner} />}
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      expandedContent={<PhotographyContent photos={photos as unknown as Photo[]} />}
      expandHeight={2}
      expandWidth={3}
    />
  );
}
