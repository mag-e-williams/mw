import type { ContentCardProps } from 'components/ContentCard';
import { FullExpandableCard } from 'components/FullExpandableCard';
import { ResumeContent } from 'components/resume/ResumeContent';
import { ResumeBanner } from 'components/resume/ResumeBanner';

type ResumeCardProps = Pick<ContentCardProps, 'turnOnAnimation'>;

export function ResumeCard({ turnOnAnimation }: ResumeCardProps) {
  return (
    <FullExpandableCard
      overlay="Resume"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<ResumeBanner />}
      expandedContent={<ResumeContent />}
    />
  );
}
