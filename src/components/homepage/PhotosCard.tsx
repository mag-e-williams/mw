import { useData } from 'api/useData';
import { ContentCard } from 'components/ContentCard';
import * as React from 'react';

export function PhotosCard() {
  const { data: photos } = useData('photos');

  if (!photos) {
    return null;
  }
  return (
    <ContentCard
      overlay="Photography"
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      hello
    </ContentCard>
  );
}
