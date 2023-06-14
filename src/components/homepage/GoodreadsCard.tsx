import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { MovieListing } from 'components/contentCards/letterboxd/MovieListing';
/**
 * Shows a card with the latest data from Goodreads
 */
export function GoodreadsCard() {
  const { data: movies } = useData('latest/movies');

  if (!movies) {
    return null;
  }
  const movie = movies[0];
  return (
    <ContentCard
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      <MovieListing movie={movie} />
    </ContentCard>
  );
}
