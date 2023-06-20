import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { ReviewCard, ReviewItemProps } from 'components/contentCards/review/ReviewCard';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { Clapperboard } from 'lucide-react';
/**
 * Shows a card with the latest data from Letterboxd
 */
export function LetterboxdCard() {
  const { data: movies } = useData('latest/movies');
  const profileLink = useLinkWithName('Letterboxd');

  if (!movies || !movies[0]) {
    return null;
  }

  const movie = movies[0];
  const { rating, filmTitle, filmYear, review, pubDate, img, link } = movie;
  const icon = <Clapperboard size="1.25em" />;

  const movieData: ReviewItemProps = {
    content: review || '',
    title: filmTitle || '',
    rating: rating || '',
    year: filmYear || '',
    time: pubDate || '',
    icon,
    imageUrl: img || '',
    link: profileLink,
    reviewLink: link || '',
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
