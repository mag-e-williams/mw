import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { ReviewCard, ReviewItemProps } from 'components/contentCards/review/ReviewCard';

/**
 * Shows a card with the latest data from Goodreads
 */
export function GoodreadsCard() {
  const { data: books } = useData('latest/goodreads');

  if (!books || !books[0]) {
    return null;
  }
  const book = books[0];

  const bookData: ReviewItemProps = {
    content: book.author,
    type: 'goodreads',
    ...book,
  };

  return (
    <ContentCard
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      <ReviewCard reviewItem={bookData} />
    </ContentCard>
  );
}
