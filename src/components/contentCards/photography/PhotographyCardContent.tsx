import type { ContentCardProps } from 'components/contentCards/ContentCard';
import type { Photo } from 'api/types/photos/Photo';
import React, { useCallback } from 'react';
import Emitter from 'services/Emitter';
import { PhotoGrid } from './PhotoGrid';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo>;
};

export function PhotographyCardContent({ photos }: PhotographyCardProps) {
  const handleScroll = useCallback(() => {
    const container = document.getElementById('photography-scroll-wrapper');
    if (container) {
      const scrollPosition = container.scrollTop;
      const containerHeight = container.scrollHeight - container.clientHeight;

      // Check if the user has scrolled to the bottom
      if (scrollPosition + 200 >= containerHeight) {
        // Fetch Additional Photos
        Emitter.emit('FETCH_PHOTOS', true);
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
      <PhotoGrid photos={photos} modal />
    </div>
  );
}
