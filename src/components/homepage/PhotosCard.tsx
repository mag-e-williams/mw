import { useDataWithParams } from 'api/useData';
import { FullExpandableCard } from 'components/FullExpandableCard';
import * as React from 'react';
import type { ContentCardProps } from 'components/ContentCard';
import { PhotographyBanner } from 'components/photography/PhotographyBanner';
import { PhotographyContent } from 'components/photography/PhotographyContent';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { Photo } from 'api/types/photos/Photo';
import { useEffect, useState } from 'react';
import Emitter from 'services/Emitter';
import { EndpointParams } from 'api/endpoints';

type PhotosCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photoBanner?: Project;
};

export function PhotosCard({ turnOnAnimation, photoBanner }: PhotosCardProps) {
  const [params, setParams] = useState({ startAfter: '' });
  const [fetchedPhotos, setFetchedPhotos] = useState<Photo[]>([]);

  const { data: photos } = useDataWithParams<'photos', EndpointParams>('photos', params);

  useEffect(() => {
    function scrollPhotos() {
      if (fetchedPhotos) {
        const lastPhoto = fetchedPhotos[fetchedPhotos.length - 1];
        const lastPhotoKey = lastPhoto?.key;
        if (lastPhotoKey) {
          setParams({ startAfter: lastPhotoKey });
        }
      }
    }

    Emitter.on('SCROLL', scrollPhotos);
    return () => {
      Emitter.off('SCROLL', scrollPhotos);
    };
  }, [fetchedPhotos, photos]);

  useEffect(() => {
    if (photos) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      setFetchedPhotos((prevPhotos: Photo[]) => [...prevPhotos, ...(photos as unknown as Photo[])]);
    }
  }, [photos]);

  if (!fetchedPhotos) {
    return null;
  }

  return (
    <FullExpandableCard
      overlay="Photography"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<PhotographyBanner photoBanner={photoBanner} />}
      expandedContent={<PhotographyContent photos={fetchedPhotos} />}
      expandHeight={2}
      expandWidth={3}
    />
  );
}
