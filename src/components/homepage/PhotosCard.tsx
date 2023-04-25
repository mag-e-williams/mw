import { useData } from 'api/useData';
import { ContentCard } from 'components/ContentCard';

export function PhotosCard() {
  const { data: photos } = useData('photos');
  // console.log(photos);
  if (!photos) {
    return null;
  }
  return (
    <ContentCard
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      Hello World
    </ContentCard>
  );
}
