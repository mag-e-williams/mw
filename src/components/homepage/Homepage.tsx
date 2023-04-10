import { useData } from 'api/useData';
import { ContentGrid } from 'components/ContentGrid';
import { MapPreviewCard } from 'components/homepage/MapPreviewCard';
import { HOMEPAGE_TITLE, Meta } from 'components/Meta';
import { useGridAnimation } from 'hooks/useGridAnimation';
import { useMemo, useRef } from 'react';
import { CertificationPreviewCard } from 'components/homepage/CertificationPreviewCard';
import { IntroCard } from './IntroCard';
import { ProjectCard } from './ProjectCard';
import { SpotifyCard } from './SpotifyCard';

/**
 * Puts all projects into a grid using `projects` data,
 * interspersed with `introBlock` data, and dark/light mode
 * toggle.
 */
export function Homepage() {
  const { data: projects } = useData('projects');
  const { data: introBlock } = useData('intro');

  // Grabs the first intro block text element, essentially.
  const firstParagraph = '';
  // introBlock?.textBlock?.content?.json.content
  //   ?.find((item) => item.nodeType === 'paragraph')
  //   ?.content?.find((item) => item.nodeType === 'text')?.value;

  // For animating grid items
  const gridRef = useRef<HTMLDivElement | null>(null);
  const turnOnAnimation = useGridAnimation(gridRef);

  const projectCards =
    projects?.map((project) => (
      <ProjectCard key={project.title} {...project} turnOnAnimation={turnOnAnimation} />
    )) ?? [];

  // These index into projectCards to splice in other cards
  const otherCards = useMemo(
    () => [
      { index: 0, card: <IntroCard key="intro" /> },
      { index: 0, card: <MapPreviewCard key="mapx" turnOnAnimation={turnOnAnimation} /> },
      { index: 2, card: <SpotifyCard key="spotify" /> },
      { index: 4, card: <CertificationPreviewCard key="certsxyc" /> },
    ],
    [turnOnAnimation],
  );

  return (
    <>
      <Meta title={HOMEPAGE_TITLE} description={firstParagraph} />
      <ContentGrid gridRef={gridRef}>
        {otherCards.map(({ index, card }, arrayIndex) => {
          const nextItem = otherCards[arrayIndex + 1];
          return [card, ...projectCards.slice(index, nextItem?.index)];
        })}
      </ContentGrid>
    </>
  );
}
