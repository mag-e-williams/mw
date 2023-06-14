import { Image } from 'components/utilComponents/Image';
import { Link } from 'components/utilComponents/Link';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { Card } from '@mui/material';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { GoodreadsItem } from 'api/types/goodreads/GoodreadsFeed';

type BookImageProps = {
  book: GoodreadsItem;
};

const IMAGE_SIZE = 160;

/**
 * Creates an album image that links to the album directly
 */
export function BookImage({ book }: BookImageProps) {
  const booksUrl = useLinkWithName('Goodreads');
  const { width, height, sizes } = useCurrentImageSizes('tall');

  return (
    <Link
      isExternal
      href={booksUrl?.url}
      sx={{
        transition: (theme) => theme.transitions.create(['transform']),
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Card
        sx={(theme) => ({
          position: 'relative',
          alignSelf: 'flex-end',
          borderRadius: 3,
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          aspectRatio: '27 / 40',
          height: '100%',
          maxHeight: `${IMAGE_SIZE}px`,
          transition: theme.transitions.create(['max-height', 'height']),
          [theme.breakpoints.down('md')]: {
            maxHeight: `${(2 * IMAGE_SIZE) / 3}px`,
            borderRadius: 3,
          },
          [theme.breakpoints.down('sm')]: {
            maxHeight: `${IMAGE_SIZE / 2}px`,
            borderRadius: 3,
          },
        })}
      >
        <Image
          alt={book.title}
          url={book.bookLargeImgUrl}
          width={width}
          height={height}
          sizes={sizes}
        />
      </Card>
    </Link>
  );
}
