import { useData } from 'api/useData';
import { ContentGrid } from 'components/ContentGrid';
import { MapPreviewCard } from 'components/homepage/MapPreviewCard';
import { HOMEPAGE_TITLE, Meta } from 'components/Meta';
import { useGridAnimation } from 'hooks/useGridAnimation';
import { useMemo, useRef } from 'react';
import { CertificationsCard } from 'components/homepage/CertificationsCard';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { findProjectWithName } from 'api/parsers';
import { IntroCard } from './IntroCard';
import { ProjectCard } from './ProjectCard';
import { SpotifyCard } from './SpotifyCard';
import { PhotosCard } from './PhotosCard';
import { ResumeCard } from './ResumeCard';

export function Homepage() {
  const { data: projects } = useData('projects');

  const pageDescription = '';

  // For animating grid items
  const gridRef = useRef<HTMLDivElement | null>(null);
  const turnOnAnimation = useGridAnimation(gridRef);
  const projectCards =
    projects
      ?.filter((project: Project) => project.visible)
      .map((project: Project) => (
        <ProjectCard key={project.title} {...project} turnOnAnimation={turnOnAnimation} />
      )) ?? [];

  const resumeCard = findProjectWithName(projects, 'Resume') ?? undefined;

  // These index into projectCards to splice in other cards
  const otherCards = useMemo(
    () => [
      { index: 0, card: <IntroCard key="introCard" /> },
      { index: 0, card: <MapPreviewCard key="mapx" turnOnAnimation={turnOnAnimation} /> },
      { index: 2, card: <SpotifyCard key="spotify" /> },
      {
        index: 2,
        card: <ResumeCard key="resume2" turnOnAnimation={turnOnAnimation} resume={resumeCard} />,
      },
      {
        index: 4,
        card: <CertificationsCard key="certs" turnOnAnimation={turnOnAnimation} />,
      },
      { index: 4, card: <PhotosCard key="photos" turnOnAnimation={turnOnAnimation} /> },
    ],
    [resumeCard, turnOnAnimation],
  );

  return (
    <>
      <Meta title={HOMEPAGE_TITLE} description={pageDescription} />
      <ContentGrid gridRef={gridRef}>
        {otherCards.map(({ index, card }, arrayIndex) => {
          const nextItem = otherCards[arrayIndex + 1];
          return [card, ...projectCards.slice(index, nextItem?.index)];
        })}
      </ContentGrid>
    </>
  );
}
