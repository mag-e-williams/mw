import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { Grid, Typography } from '@mui/material';
import { Image } from 'components/Image';
import { Link } from 'components/Link';

type CertificationProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certification: CertificationBadge;
};

function GridImage({ certification }: CertificationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes } = useCurrentImageSizes();
  return (
    <Grid
      item
      xs={3}
      md={1}
      sx={{ padding: 2, alignItems: 'center' }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <HoverableContainer isHovered={isHovered}>
        <Link href={certification?.link?.url} isExternal>
          <Image
            url={certification?.thumbnail?.url}
            width={width}
            height={height}
            alt={certification.title ?? 'Certification Badge'}
            priority
            sizes={sizes}
          />
        </Link>
      </HoverableContainer>
    </Grid>
  );
}

function GridText({ certification }: CertificationProps) {
  return (
    <Grid item xs={3} md={2} sx={{ padding: 2 }}>
      <Link href={certification?.link?.url} isExternal linkProps={{ underline: 'none' }}>
        <Typography variant="h6">
          {certification.title} | {certification.level}
        </Typography>
      </Link>
      <Typography variant="caption">{certification.description}</Typography>
    </Grid>
  );
}

export function Certification({ certification }: CertificationProps) {
  return (
    <>
      <GridImage certification={certification} />
      <GridText certification={certification} />
    </>
  );
}
