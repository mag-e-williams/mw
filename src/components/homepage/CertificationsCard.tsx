import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/ContentCard';
import { FullExpandableCard } from 'components/FullExpandableCard';
import { CertificationsContent } from 'components/certifications/CertificationsContent';
import { CertificationsBanner } from 'components/certifications/CertificationsBanner';

type CertificationsCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function CertificationsCard({ turnOnAnimation }: CertificationsCardProps) {
  const { data: certs } = useData('certifications');

  return (
    <FullExpandableCard
      overlay="Certifications"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<CertificationsBanner />}
      expandedContent={<CertificationsContent certifications={certs} />}
    />
  );
}
