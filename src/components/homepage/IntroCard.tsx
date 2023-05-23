import { useData } from 'api/useData';
import { ContentCard } from 'components/contentCards/ContentCard';
import { HoverableContainer } from 'components/utilComponents/HoverableContainer';
import { Image } from 'components/utilComponents/Image';
import { useLinkWithName } from 'hooks/useLinkWithName';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { RichText } from 'components/utilComponents/RichText';
import { HorizontalStack } from 'ui/HorizontalStack';
import { Link } from 'components/utilComponents/Link';
import { Link as LinkType } from 'api/types/generated/contentfulApi.generated';
import { NavItem } from 'ui/Nav';

/**
 * Width of the intro image on small screens
 */
const SMALL_IMAGE_SIZE = '14em';

function IntroLink({ link }: { link?: LinkType }) {
  if (!link) {
    return null;
  }

  return (
    <NavItem sx={{ padding: 0 }}>
      <Link
        title={link.title}
        icon={link.icon}
        layout="icon"
        href={link.url}
        isExternal={link.url?.startsWith('http')}
        aria-label={link.title}
        tooltipPlacement="bottom"
        linkProps={{
          color: 'secondary',
        }}
        sx={{
          marginRight: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </NavItem>
  );
}

export function IntroCard() {
  const { data: introBlock } = useData('intro');
  const linkedInLink = useLinkWithName('LinkedIn');
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes } = useCurrentImageSizes();

  const introLinks = introBlock?.introLinksCollection?.items;

  if (!introBlock?.textBlock?.json) {
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
            url={introBlock?.headshot?.url}
            width={width}
            height={height}
            alt={introBlock?.headshot?.title ?? 'Introduction image'}
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
        <RichText {...introBlock.textBlock} />
        <HorizontalStack>
          {introLinks && introLinks?.map((link) => <IntroLink link={link} key={link?.url} />)}
        </HorizontalStack>
      </ContentCard>
    </>
  );
}
