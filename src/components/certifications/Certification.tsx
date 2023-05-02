import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { Grid, Stack, Typography } from '@mui/material';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { HorizontalStack } from 'ui/HorizontalStack';

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

function CertificationTitle({ certification }: CertificationProps) {
  return certification.link ? (
    <Link
      isExternal
      {...certification?.link}
      href={certification?.link?.url}
      linkProps={{ variant: 'h5', color: 'h5' }}
    >
      {certification.title}
    </Link>
  ) : (
    <Typography variant="h5" component="span">
      {certification.title}
    </Typography>
  );
}

function CertificationSubtitle({ certification }: CertificationProps) {
  return certification.org && certification.level ? (
    <Typography variant="overline" sx={{ alignItems: 'center' }}>
      {certification.org?.title} | {certification.level}
    </Typography>
  ) : (
    <Typography variant="overline" sx={{ alignItems: 'center' }}>
      {certification.org?.title}
    </Typography>
  );
}

function GridText({ certification }: CertificationProps) {
  return (
    <Grid item xs={3} md={2}>
      <Stack
        sx={{
          flex: 1,
          gap: 1,
          justifyContent: 'space-between',
        }}
      >
        <CertificationSubtitle certification={certification} />

        <CertificationTitle certification={certification} />
        <Typography variant="caption">{certification.description}</Typography>
      </Stack>
    </Grid>
  );
}

export function Certification({ certification }: CertificationProps) {
  return (
    <HorizontalStack
      sx={{
        justifyContent: 'space-between',
        paddingY: 2,
      }}
    >
      <GridImage certification={certification} />
      <GridText certification={certification} />
    </HorizontalStack>
  );
}
