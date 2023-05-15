import type { ContentCardProps } from 'components/contentCards/ContentCard';
import type { Photo } from 'api/types/photos/Photo';
import { PhotoGrid } from './PhotoGrid';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo>;
};

export function PhotographyContent({ photos }: PhotographyCardProps) {
  return <PhotoGrid photos={photos} />;
}
