// import type { Project } from 'api/types/generated/contentfulApi.generated';
import { BadgeType as Badge } from 'api/types/Badge';
import type { ContentCardProps } from 'components/ContentCard';
import { ContentCard } from 'components/ContentCard';
import { HoverableContainer } from 'components/HoverableContainer';
import { useState } from 'react';
import { Image } from 'components/Image';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';

type CertificationCardProps = Badge & Pick<ContentCardProps, 'turnOnAnimation'>;

export function CertificationCard({ title, link, thumbnail }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  // const { width, height, sizes, verticalSpan, horizontalSpan } = useCurrentImageSizes(layout);
  console.log('hello', title, link, thumbnail);
  return (
    <ContentCard
      // verticalSpan={verticalSpan}
      // horizontalSpan={horizontalSpan}
      link={link}
      overlay={title}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      // turnOnAnimation={turnOnAnimation}
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          maxHeight: theme.shape.gridItemSize(0.75),
        },
      })}
    >
      {thumbnail && (
        <HoverableContainer isHovered={isHovered}>
          <Image
            url={thumbnail.url}
            // width={width}
            // height={height}
            alt={title ?? 'Project Image'}
            // sizes={sizes}
          />
        </HoverableContainer>
      )}
    </ContentCard>
  );
}
