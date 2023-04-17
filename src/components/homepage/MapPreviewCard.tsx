import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/ContentCard';
import { FullMapCard } from 'components/maps/FullMapCard';

type MapPreviewCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function MapPreviewCard({ turnOnAnimation }: MapPreviewCardProps) {
  const { data: location } = useData('location');

  return <FullMapCard turnOnAnimation={turnOnAnimation} location={location} />;
}
