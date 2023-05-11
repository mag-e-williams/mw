import type { ContentCardProps } from 'components/ContentCard';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import Image from 'next/image';
import { Photo } from 'api/types/photos/photo';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<Photo> | undefined;
};

export function PhotographyContent({ photos }: PhotographyCardProps) {
  if (!photos) {
    return null;
  }
  return (
    <Box
      sx={{
        padding: 4,
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Masonry columns={4} spacing={2}>
        {photos.map((item) => (
          <div key={item.title}>
            <Image
              src={`${item.url}?w=162&auto=format`}
              alt={item.title || ''}
              loading="lazy"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                borderRadius: 6,
                display: 'block',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
