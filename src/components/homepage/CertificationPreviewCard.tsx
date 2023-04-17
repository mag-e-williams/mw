import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/ContentCard';
import { CertificationsCard } from 'components/certifications/CertificationsCard';

type CertPreviewCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function CertificationPreviewCard({ turnOnAnimation }: CertPreviewCardProps) {
  const { data: certs } = useData('certifications');
  return <CertificationsCard turnOnAnimation={turnOnAnimation} certifications={certs} />;
}
