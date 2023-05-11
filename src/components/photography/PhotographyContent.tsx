import type { ContentCardProps } from 'components/ContentCard';
import { Masonry } from '@mui/lab';
import { Box, IconButton, Container, Modal } from '@mui/material';
import Image from 'next/image';
import type { Photo } from 'api/types/photos/Photo';
import React, { useCallback, useEffect } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FaIcon } from 'components/FaIcon';

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
};

export function PhotographyContent({ photos }: PhotographyCardProps) {
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

  return (
    <Box
      sx={{
        padding: 4,
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Masonry columns={4} spacing={2}>
        {photos.map((item, index) => (
          <Container key={item.title} onClick={() => handlePhotoClick(item, index)}>
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
        ))}
      </Masonry>

      <Modal open={Boolean(selectedPhoto)} onClose={handleCloseModal}>
        <Box sx={style}>
          <IconButton onClick={handlePrevPhoto}>
            <FaIcon icon={faChevronLeft} />
          </IconButton>

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

          <IconButton onClick={handleNextPhoto}>
            <FaIcon icon={faChevronRight} />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
