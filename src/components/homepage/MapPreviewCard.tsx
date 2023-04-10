import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/ContentCard';
import { useColorScheme } from 'hooks/useColorScheme';
import { FullMapCard } from 'components/maps/FullMapCard';

type MapPreviewCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function MapPreviewCard({ turnOnAnimation }: MapPreviewCardProps) {
  const { data: location } = useData('location');
  const { colorScheme } = useColorScheme();

  const backgroundImageUrl = colorScheme.isInitialized
    ? (colorScheme.mode === 'light'
        ? location?.backupImageUrls.light
        : location?.backupImageUrls.dark) ?? null
    : null;

  return (
    <FullMapCard
      turnOnAnimation={turnOnAnimation}
      location={location}
      backgroundImageUrl={backgroundImageUrl}
    />
  );
}
