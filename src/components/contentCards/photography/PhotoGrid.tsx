import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { Box, Container } from '@mui/material';
import type { Photo } from 'api/types/photos/Photo';
import React, { useCallback, useState } from 'react';
import { Masonry } from '@mui/lab';
import Emitter from 'services/Emitter';
import { PhotoGridModal } from './PhotoGridModal';
import { LoadingImage } from './LoadingImage';

type PhotoGridProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo>;
  modal: boolean;
};

export function PhotoGrid({ photos, modal }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handleScroll = useCallback(() => {
    const container = document.getElementById('photography-scroll-wrapper');
    if (container) {
      const scrollPosition = container.scrollTop;
      const containerHeight = container.scrollHeight - container.clientHeight;

      // Check if the user has scrolled to the bottom
      if (scrollPosition + 200 >= containerHeight) {
        // Fetch Additional Photos
        Emitter.emit('SCROLL', true);
      }
    }
  }, []);

  return (
    <div
      id="photography-scroll-wrapper" // ID on the scroll wrapper for scrolling
      style={{
        overflowY: 'scroll',
        height: '100%',
      }}
      onScroll={handleScroll}
    >
      <Box
        id="photography-container" // ID on the Box component for scrolling
        sx={(theme) => ({
          padding: 4,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            padding: 1,
          },
        })}
      >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          spacing={1.5}
          defaultColumns={3}
          defaultSpacing={2}
        >
          {photos.map((item, index) => (
            <Container key={item.key} onClick={() => handlePhotoClick(item, index)}>
              <LoadingImage image={item} />
            </Container>
          ))}
        </Masonry>

        {modal && selectedPhoto && (
          <PhotoGridModal
            photos={photos}
            selectedPhoto={selectedPhoto}
            selectedIndex={selectedIndex}
            onSelectedPhoto={setSelectedPhoto}
            onSelectedIndex={setSelectedIndex}
          />
        )}
      </Box>
    </div>
  );
}
