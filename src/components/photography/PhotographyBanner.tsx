import { Card } from '@mui/material';
import { ContentCardProps } from 'components/ContentCard';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<string>;
};

export function PhotographyBanner({ photos }: PhotographyCardProps) {
  const bannerImage = photos[Math.floor(Math.random() * photos.length)];

  if (!bannerImage) {
    return null;
  }
  return (
    <Card
      sx={{
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        aspectRatio: '1 / 1',
        height: '100%',
        backgroundImage: `url('${bannerImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
