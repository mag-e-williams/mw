import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { ReviewCard, ReviewItemProps } from 'components/contentCards/review/ReviewCard';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { Library } from 'lucide-react';

/**
 * Shows a card with the latest data from Goodreads
 */
export function GoodreadsCard() {
  const { data: books } = useData('latest/goodreads');
  const link = useLinkWithName('Goodreads');

  if (!books || !books[0]) {
    return null;
  }
  const book = books[0];

  const { author, title, userRating } = book;
  const icon = <Library size="1.25em" />;

  const bookData: ReviewItemProps = {
    content: author,
    title,
    rating: userRating,
    year: book.bookContent.bookPublishedYear.toString(),
    time: book?.userReadAt,
    icon,
    imageUrl: book.bookLargeImgUrl,
    link,
    reviewLink: book.link,
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
