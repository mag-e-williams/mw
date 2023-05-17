import { EndpointParams } from 'api/endpoints';
import { Photo } from 'api/types/photos/Photo';
import { useDataWithParams } from 'api/useData';
import { PhotographyContent } from 'components/contentCards/photography/PhotographyContent';
import React, { useState, useEffect } from 'react';
import Emitter from 'services/Emitter';

export function PhotosPage() {
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

  return <PhotographyContent photos={fetchedPhotos} />;
}
