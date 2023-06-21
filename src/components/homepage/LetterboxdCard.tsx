import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { ReviewCard, ReviewItemProps } from 'components/contentCards/review/ReviewCard';

/**
 * Shows a card with the latest data from Letterboxd
 */
export function LetterboxdCard() {
  const { data: movies } = useData('latest/movies');

  if (!movies || !movies[0]) {
    return null;
  }

  const movie = movies[0];
  const movieData: ReviewItemProps = {
    content: movie.review || '',
    type: 'letterboxd',
    ...movie,
  };

  return (
    <ContentCard
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      <ReviewCard reviewItem={movieData} />
    </ContentCard>
  );
}
