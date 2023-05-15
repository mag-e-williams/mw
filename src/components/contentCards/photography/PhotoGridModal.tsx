import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { Box, Modal, useTheme } from '@mui/material';
import Image from 'next/image';
import type { Photo } from 'api/types/photos/Photo';
import React, { useCallback, useEffect } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FaIcon } from 'components/utilComponents/FaIcon';
import { Control } from 'components/baseControls/Control';
import Emitter from 'services/Emitter';

type PhotoGridModalProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo>;
  selectedPhoto: Photo;
  selectedIndex: number;
  onSelectedPhoto: (selectedPhoto: Photo | null) => void;
  onSelectedIndex: (selectedIndex: number) => void;
};

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  border: 'none',
  maxHeight: '100vh',
};

export function PhotoGridModal({
  photos,
  selectedPhoto,
  selectedIndex,
  onSelectedPhoto,
  onSelectedIndex,
}: PhotoGridModalProps) {
  const theme = useTheme();

  const setSelected = useCallback(
    (photo: Photo | null, index: number) => {
      onSelectedPhoto(photo);
      onSelectedIndex(index);
    },
    [onSelectedIndex, onSelectedPhoto],
  );

  const handleCloseModal = useCallback(() => {
    setSelected(null, 0);
  }, [setSelected]);

  const handlePrevPhoto = useCallback(() => {
    const prevIndex = (selectedIndex + photos.length - 1) % photos.length;
    setSelected(photos[prevIndex] || null, prevIndex);
  }, [selectedIndex, photos, setSelected]);

  const handleNextPhoto = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % photos.length;
    if (nextIndex + 3 >= photos.length) {
      Emitter.emit('SCROLL', true);
      setTimeout(() => {
        setSelected(photos[nextIndex] || null, nextIndex);
      }, 500);
    } else {
      setSelected(photos[nextIndex] || null, nextIndex);
    }
  }, [selectedIndex, photos, setSelected]);

  // Arrow Key Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (event.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (event.key === 'Escape') {
        // close modal on 'esc'
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevPhoto, handleNextPhoto, handleCloseModal]);

  return (
    <Modal open={Boolean(selectedPhoto)} onClose={handleCloseModal} sx={style}>
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
              maxWidth: '100%' /* Ensure the image doesn't exceed the container's width */,
              maxHeight: '100vh' /* Ensure the image doesn't exceed the container's height */,
              objectFit: 'contain',
            }}
          />
        )}

        <Control onClick={handleNextPhoto} position="right" theme={theme}>
          <FaIcon icon={faChevronRight} />
        </Control>
      </Box>
    </Modal>
  );
}
