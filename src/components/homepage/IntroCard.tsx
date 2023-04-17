import { useData } from 'api/useData';
import { ContentCard } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { Image } from 'components/Image';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { Typography } from '@mui/material';
import { SxProps } from 'ui/theme';

/**
 * Width of the intro image on small screens
 */
const SMALL_IMAGE_SIZE = '14em';

/**
 * Offsets for fixed header so anchor links look right
 */
const HEADING_SX: SxProps = {
  marginBottom: (theme) => theme.spacing(3),
  marginTop: -12,
  paddingTop: 12,
};

function HeadingWithId({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}) {
  let id = '';
  if (typeof children === 'string') {
    id = children;
  }
  if (Array.isArray(children)) {
    id = children.map((child) => (typeof child === 'string' ? child : '')).join('');
  }
  id = id
    .toLowerCase()
    .replace(/[^a-z]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return (
    <Typography id={id} variant={variant} sx={HEADING_SX}>
      {children}
    </Typography>
  );
}

export function IntroCard() {
  const { data: introBlock } = useData('intro');

  const linkedInLink = useLinkWithName('LinkedIn');
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes } = useCurrentImageSizes();

  if (!introBlock?.textBlock?.content) {
    return null;
  }

  return (
    <>
      <ContentCard
        link={linkedInLink}
        overlay="About"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            justifySelf: 'center',
            width: SMALL_IMAGE_SIZE,
            height: SMALL_IMAGE_SIZE,
            borderRadius: `calc(${SMALL_IMAGE_SIZE} / 2)`,
          },
        })}
        overlaySx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            visibility: 'hidden',
          },
        })}
      >
        <HoverableContainer isHovered={isHovered}>
          <Image
            url={introBlock.image.url}
            width={width}
            height={height}
            alt={introBlock.image.title ?? 'Introduction image'}
            priority
            sizes={sizes}
          />
        </HoverableContainer>
      </ContentCard>
      <ContentCard
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <HeadingWithId variant="h1">{introBlock.textBlock.content.title}</HeadingWithId>
        {introBlock.textBlock.content.body &&
          introBlock.textBlock.content.body.map((blockString) => (
            <Typography
              key={blockString}
              variant="body1"
              sx={{ marginBottom: (theme) => theme.spacing(3.5) }}
            >
              {blockString}
            </Typography>
          ))}
      </ContentCard>
    </>
  );
}
