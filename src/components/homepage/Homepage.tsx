import { useData } from 'api/useData';
import { ContentGrid } from 'components/homepage/ContentGrid';
import { MapPreviewCard } from 'components/homepage/MapPreviewCard';
import { HOMEPAGE_TITLE, Meta } from 'components/utilComponents/Meta';
import { useGridAnimation } from 'hooks/useGridAnimation';
import { useMemo, useRef } from 'react';
import { CertificationsCard } from 'components/homepage/CertificationsCard';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { findProjectWithName } from 'api/parsers';
import { Container } from '@mui/material';
import { IntroCard } from './IntroCard';
import { ProjectCard } from './ProjectCard';
import { SpotifyCard } from './SpotifyCard';
import { PhotosCard } from './PhotosCard';
import { LetterboxdCard } from './LetterboxdCard';
import { ResumeCard } from './ResumeCard';
import { GoodreadsCard } from './GoodreadsCard';

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
  const photographyCard = findProjectWithName(projects, 'Photography') ?? undefined;

  // These index into projectCards to splice in other cards
  const otherCards = useMemo(
    () => [
      { index: 0, card: <IntroCard key="introCard" /> },
      { index: 0, card: <MapPreviewCard key="map" turnOnAnimation={turnOnAnimation} /> },
      { index: 1, card: <SpotifyCard key="spotify" /> },
      {
        index: 2,
        card: <ResumeCard key="resume" turnOnAnimation={turnOnAnimation} resume={resumeCard} />,
      },
      {
        index: 2,
        card: <LetterboxdCard key="letterboxd" />,
      },
      {
        index: 4,
        card: <GoodreadsCard key="goodreads" />,
      },
      {
        index: 4,
        card: (
          <PhotosCard
            key="photos"
            turnOnAnimation={turnOnAnimation}
            photoBanner={photographyCard}
          />
        ),
      },

      {
        index: 4,
        card: <CertificationsCard key="certs" turnOnAnimation={turnOnAnimation} />,
      },
    ],
    [photographyCard, resumeCard, turnOnAnimation],
  );

  return (
    <>
      <Meta title={HOMEPAGE_TITLE} description={pageDescription} />
      <Container sx={{ marginTop: 16 }}>
        <ContentGrid gridRef={gridRef}>
          {otherCards.map(({ index, card }, arrayIndex) => {
            const nextItem = otherCards[arrayIndex + 1];
            return [card, ...projectCards.slice(index, nextItem?.index)];
          })}
        </ContentGrid>
      </Container>
    </>
  );
}
