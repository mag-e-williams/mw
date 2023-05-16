import Image from 'next/image';
import type { Photo } from 'api/types/photos/Photo';
import React, { useState } from 'react';
import { Skeleton } from '@mui/material';

type LoadingImageProps = {
  image: Photo;
};

export function LoadingImage({ image }: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {isLoading && (
        <Skeleton
          variant="rounded"
          sx={{
            display: 'block',
            width: '100%',
            height: 20,
          }}
        />
      )}

      <Image
        onLoad={() => setIsLoading(false)}
        src={`${image.url}?w=100&auto=format`}
        alt={image.key}
        width={0}
        height={0}
        loading="lazy"
        sizes="100vw"
        style={{
          borderRadius: 6,
          display: 'block',
          width: '100%',
          height: 'auto',
          // Since masonry lists depend on the height of the element,
          // minHeight serves as a placeholder value while the img has not yet loaded.
          minHeight: 10,
        }}
      />
    </>
  );
}
