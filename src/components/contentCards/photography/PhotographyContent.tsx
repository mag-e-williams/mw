import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { Box, Container, Modal, useTheme } from '@mui/material';
import Image from 'next/image';
import type { Photo } from 'api/types/photos/Photo';
import React, { useCallback, useEffect, useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FaIcon } from 'components/utilComponents/FaIcon';
import { Control } from 'components/baseControls/Control';
import { Masonry } from '@mui/lab';
import Emitter from 'services/Emitter';

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

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
    if (nextIndex + 1 === photos.length) {
      Emitter.emit('SCROLL', true);
      setTimeout(() => {
        setSelectedPhoto(photos[nextIndex] || null);
        setSelectedIndex(nextIndex);
      }, 500);
    } else {
      setSelectedPhoto(photos[nextIndex] || null);
      setSelectedIndex(nextIndex);
    }
  }, [selectedIndex, photos]);

  // Arrow Key Navigation
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
        Emitter.emit('SCROLL', true);
      }
    }
  }, []);

  return (
    <div
      id="photography-scroll-wrapper" // Add an id to the scroll wrapper
      style={{
        overflowY: 'scroll',
        height: '100%',
      }}
      onScroll={handleScroll} // Add the onScroll event listener
    >
      <Box
        id="photography-container" // Add an id to the Box component
        sx={{
          padding: 4,
          display: 'flex',
        }}
      >
        <Masonry columns={3} spacing={1} defaultColumns={3} defaultSpacing={1}>
          {photos.map((item, index) => (
            <Container key={item.key} onClick={() => handlePhotoClick(item, index)}>
              <Image
                src={`${item.url}?w=162&auto=format`}
                alt={item.key}
                width={0}
                height={0}
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
            </Container>
          ))}
        </Masonry>

        <Modal open={Boolean(selectedPhoto)} onClose={handleCloseModal}>
          <Box sx={style}>
            <Control onClick={handlePrevPhoto} position="left" theme={theme}>
              <FaIcon icon={faChevronLeft} />
            </Control>

            {selectedPhoto && (
              <Image
                src={`${selectedPhoto.url}?w=162&auto=format`}
                alt={selectedPhoto.key}
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
