import { Stack } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { BookImage } from './BookImage';
import { ReviewedTime } from './ReviewedTime';
import { ReviewTitle } from './ReviewTitle';
import { ReviewStars } from './ReviewStars';
import { GoodreadsItem } from 'api/types/goodreads/GoodreadsFeed';
import { ReviewSubTitle } from './ReviewSubTitle';

interface BookListingProps {
  book: GoodreadsItem;
}

export function BookListing({ book }: BookListingProps) {
  const bookRating = book.userRating;
  const author = book.author;
  const bookTitle = book.title;
  const bookYear = book.bookContent.bookPublishedYear.toString();

  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1,
        justifyContent: 'space-between',
      }}
    >
      <HorizontalStack
        sx={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <ReviewedTime book={book} />
        <BookImage book={book} />
      </HorizontalStack>
      <Stack>
        <ReviewStars numStars={bookRating} />
        <ReviewTitle title={bookTitle} year={bookYear} url={book.link} />
        <ReviewSubTitle content={author} url={book.link} />
      </Stack>
    </Stack>
  );
}
