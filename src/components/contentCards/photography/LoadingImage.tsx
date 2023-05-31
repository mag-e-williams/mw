import type { Photo } from 'api/types/photos/Photo';
import React, { useState } from 'react';
import { Container, Skeleton } from '@mui/material';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { Image } from 'components/utilComponents/Image';

type LoadingImageProps = {
  image: Photo;
};

export function LoadingImage({ image }: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { width, height, sizes } = useCurrentImageSizes();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container
      sx={{
        transform: 'initial',
        cursor: 'pointer',
        opacity: 1,
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rounded"
          sx={{
            display: 'block',
            width: '100%',
            height: '170px',
          }}
        />
      )}

      <Image
        onImageLoad={handleImageLoad}
        url={image.url}
        width={width}
        height={height}
        alt={image.key}
        priority
        sizes={sizes}
        sx={{
          borderRadius: 6,
          display: 'block',
          height: isLoading ? 0 : 'auto',
          width: isLoading ? 0 : '100%',
          // Since masonry lists depend on the height of the element,
          // minHeight serves as a placeholder value while the img has not yet loaded.
          minHeight: 1,
        }}
      />
    </Container>
  );
}
