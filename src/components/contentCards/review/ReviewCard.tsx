import { Stack } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import { Link } from 'api/types/generated/contentfulApi.generated';
import { ReviewImage } from './ReviewImage';
import { ReviewedTime } from './ReviewedTime';
import { ReviewTitle } from './ReviewTitle';
import { ReviewStars } from './ReviewStars';
import { ReviewSubTitle } from './ReviewSubTitle';

export interface ReviewCardProps {
  reviewItem: ReviewItemProps;
}

export interface ReviewItemProps {
  content: string;
  title: string;
  rating: number | string;
  year: string;
  time: string;
  icon: React.ReactNode;
  imageUrl: string;
  link?: Link;
  reviewLink: string;
}

export function ReviewCard({ reviewItem }: ReviewCardProps) {
  const { content, title, rating, year, time, icon, imageUrl, link, reviewLink } = reviewItem;
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
        <ReviewedTime time={time} icon={icon} />
        <ReviewImage link={reviewLink} title={title} imageUrl={imageUrl} />
      </HorizontalStack>
      <Stack>
        <ReviewStars numStars={rating} />
        <ReviewTitle title={title} year={year} url={reviewLink} />
        <ReviewSubTitle content={content} url={reviewLink} />
      </Stack>
    </Stack>
  );
}
