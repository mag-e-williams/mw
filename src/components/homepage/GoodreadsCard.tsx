import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { BookListing } from 'components/contentCards/goodreads/BookListing';
/**
 * Shows a card with the latest data from Goodreads
 */
export function GoodreadsCard() {
  const { data: books } = useData('latest/goodreads');

  if (!books || !books[0]) {
    return null;
  }

  const book = books[0];
  return (
    <ContentCard
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      <BookListing book={book} />
    </ContentCard>
  );
}
