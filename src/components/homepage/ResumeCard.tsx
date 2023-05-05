import type { ContentCardProps } from 'components/ContentCard';
import { FullExpandableCard } from 'components/FullExpandableCard';
import { ResumeContent } from 'components/resume/ResumeContent';
import { ResumeBanner } from 'components/resume/ResumeBanner';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { FileInput } from 'lucide-react';
import { useMemo } from 'react';

type ResumeCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  resume?: Project;
};

// function ExportControl({ resume }: ResumeCardProps) {
//   const url = resume?.file?.url;
//   return <FileInput size="1em" onClick={() => window.open(url, '_blank')} />;
// }

export function ResumeCard({ turnOnAnimation, resume }: ResumeCardProps) {
  const url = resume?.file?.url;

  const exportControl = useMemo(
    () => <FileInput size="1em" onClick={() => window.open(url, '_blank')} />,
    [url],
  );

  return (
    <FullExpandableCard
      overlay="Resume"
      turnOnAnimation={turnOnAnimation}
      bannerContent={<ResumeBanner resume={resume} />}
      expandedContent={<ResumeContent resume={resume} />}
      additionalControls={exportControl}
    />
  );
}
