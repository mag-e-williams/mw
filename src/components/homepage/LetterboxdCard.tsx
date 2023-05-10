import { useData } from 'api/useData';
import { ContentCard } from 'components/ContentCard';
import { MovieListing } from 'components/letterboxd/MovieListing';
/**
 * Shows a card with the latest data from Spotify
 */
export function LetterboxdCard() {
  const { data: movies } = useData('movies');

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
