import { useData } from 'api/useData';
import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { FullExpandableCard } from 'components/contentCards/FullExpandableCard';
import { CertificationsContent } from 'components/contentCards/certifications/CertificationsContent';
import { CertificationsBanner } from 'components/contentCards/certifications/CertificationsBanner';

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
