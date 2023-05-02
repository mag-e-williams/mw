import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/ContentCard';
import { FullCertificationsCard } from 'components/certifications/FullCertificationsCard';

type CertPreviewCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function CertificationsPreviewCard({ turnOnAnimation }: CertPreviewCardProps) {
  const { data: certs } = useData('certifications');

  return <FullCertificationsCard turnOnAnimation={turnOnAnimation} certifications={certs} />;
}
