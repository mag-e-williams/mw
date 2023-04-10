import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/ContentCard';
import { useColorScheme } from 'hooks/useColorScheme';
import { FullCertCard } from 'components/certifications/FullCertCard';

type MapPreviewCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function CertificationPreviewCard({ turnOnAnimation }: MapPreviewCardProps) {
  const { data: certs } = useData('certifications');
  const { colorScheme } = useColorScheme();
  return (
    <FullCertCard
      turnOnAnimation={turnOnAnimation}
      certifications={certs}
      // backgroundImageUrl={backgroundImageUrl}
    />
  );
}
