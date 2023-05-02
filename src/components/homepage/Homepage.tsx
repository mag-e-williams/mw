import { useData } from 'api/useData';
import { ContentGrid } from 'components/ContentGrid';
import { MapPreviewCard } from 'components/homepage/MapPreviewCard';
import { HOMEPAGE_TITLE, Meta } from 'components/Meta';
import { useGridAnimation } from 'hooks/useGridAnimation';
import { useMemo, useRef } from 'react';
import { CertificationsPreviewCard } from 'components/homepage/CertificationsPreviewCard';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { IntroCard } from './IntroCard';
import { ProjectCard } from './ProjectCard';
import { SpotifyCard } from './SpotifyCard';
import { PhotosCard } from './PhotosCard';

export function Homepage() {
  const { data: projects } = useData('projects');

  const pageDescription = '';

  // For animating grid items
  const gridRef = useRef<HTMLDivElement | null>(null);
  const turnOnAnimation = useGridAnimation(gridRef);

  const projectCards =
    projects?.map((project: Project) => (
      <ProjectCard key={project.title} {...project} turnOnAnimation={turnOnAnimation} />
    )) ?? [];

  // These index into projectCards to splice in other cards
  const otherCards = useMemo(
    () => [
      { index: 0, card: <IntroCard key="introCard" /> },
      { index: 0, card: <MapPreviewCard key="mapx" turnOnAnimation={turnOnAnimation} /> },
      { index: 2, card: <SpotifyCard key="spotify" /> },
      {
        index: 4,
        card: <CertificationsPreviewCard key="certs" turnOnAnimation={turnOnAnimation} />,
      },
      { index: 4, card: <PhotosCard key="photos" /> },
    ],
    [turnOnAnimation],
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
