import { Stack } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import type { Review } from 'api/types/letterboxd/Review';
import { MovieImage } from './MovieImage';
import { MovieReview } from './MovieReview';
import { ReviewedTime } from './ReviewedTime';
import { MovieTitle } from './MovieTitle';
import { ReviewStars } from './ReviewStars';

interface MovieListingProps {
  movie?: Review;
}

export function MovieListing({ movie }: MovieListingProps) {
  const movieUrl = movie?.link || '';
  const movieTitle = movie?.filmTitle || '';
  const movieImage = movie?.img || '';

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
        <ReviewedTime movie={movie} />
        <MovieImage movieImage={movieImage} movieTitle={movieTitle} />
      </HorizontalStack>
      <Stack>
        <ReviewStars review={movie} />
        <MovieTitle movie={movie} url={movieUrl} />
        <MovieReview movieReview={movie} />
      </Stack>
    </Stack>
  );
}
