import type { ContentCardProps } from 'components/contentCards/ContentCard';
import type { Photo } from 'api/types/photos/Photo';
import React, { useState, useEffect } from 'react';
import Emitter from 'services/Emitter';
import { PhotoGrid } from 'components/contentCards/photography/PhotoGrid';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo>;
};

export function PhotosPageContent({ photos }: PhotographyCardProps) {
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    setScrollYPosition(window.scrollY);
    const scrollY = scrollYPosition || window.pageYOffset;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxScroll = document.documentElement.scrollHeight - windowHeight;
    const buffer = 500;

    // Check if scroll position is at the bottom
    if (scrollY + buffer >= maxScroll) {
      Emitter.emit('FETCH_PHOTOS', true);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      id="photography-scroll-wrapper"
      style={{
        overflowY: 'scroll',
        height: '100%',
      }}
    >
      <PhotoGrid photos={photos} modal />
    </div>
  );
}
