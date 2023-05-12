import type { ContentCardProps } from 'components/ContentCard';
import { Box, Container, ImageList, ImageListItem, Modal, useTheme } from '@mui/material';
import Image from 'next/image';
import type { Photo } from 'api/types/photos/Photo';
import React, { useCallback, useEffect } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FaIcon } from 'components/FaIcon';
import { Control } from 'components/baseControls/Control';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo>;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
};

export function PhotographyContent({ photos }: PhotographyCardProps) {
  const theme = useTheme();

  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setSelectedIndex(0);
  };

  const handlePrevPhoto = useCallback(() => {
    const prevIndex = (selectedIndex + photos.length - 1) % photos.length;
    setSelectedPhoto(photos[prevIndex] || null);
    setSelectedIndex(prevIndex);
  }, [selectedIndex, photos]);

  const handleNextPhoto = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex] || null);
    setSelectedIndex(nextIndex);
  }, [selectedIndex, photos]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (event.key === 'ArrowRight') {
        handleNextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevPhoto, handleNextPhoto]);

  const handleScroll = useCallback(() => {
    const container = document.getElementById('photography-scroll-wrapper');
    if (container) {
      const scrollPosition = container.scrollTop;
      const containerHeight = container.scrollHeight - container.clientHeight;

      // Check if the user has scrolled to the bottom
      if (scrollPosition >= containerHeight) {
        // Fetch Additional Photos
        console.log('Scrolled to the bottom');
      }
    }
  }, []);

  return (
    <div
      id="photography-scroll-wrapper" // Add an id to the scroll wrapper
      style={{
        overflowY: 'scroll',
        height: '700px',
      }}
      onScroll={handleScroll} // Add the onScroll event listener
    >
      <Box
        id="photography-container" // Add an id to the Box component
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {photos.map((item, index) => (
            <ImageListItem key={item.title}>
              <Container onClick={() => handlePhotoClick(item, index)}>
                <Image
                  src={`${item.url}?w=162&auto=format`}
                  alt={item.title || ''}
                  loading="lazy"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    borderRadius: 6,
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Container>
            </ImageListItem>
          ))}
        </ImageList>

        <Modal open={Boolean(selectedPhoto)} onClose={handleCloseModal}>
          <Box sx={style}>
            <Control onClick={handlePrevPhoto} position="left" theme={theme}>
              <FaIcon icon={faChevronLeft} />
            </Control>

            {selectedPhoto && (
              <Image
                src={`${selectedPhoto.url}?w=162&auto=format`}
                alt={selectedPhoto.title || ''}
                loading="lazy"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  borderRadius: 6,
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                }}
              />
            )}

            <Control onClick={handleNextPhoto} position="right" theme={theme}>
              <FaIcon icon={faChevronRight} />
            </Control>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}
