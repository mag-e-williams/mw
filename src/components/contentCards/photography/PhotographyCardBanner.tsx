import { ContentCardProps } from 'components/contentCards/ContentCard';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { Image } from 'components/utilComponents/Image';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photoBanner?: Project;
};

export function PhotographyCardBanner({ photoBanner }: PhotographyCardProps) {
  const { width, height, sizes } = useCurrentImageSizes();
  const bannerImage = photoBanner?.thumbnail;
  if (!bannerImage) {
    return null;
  }
  return (
    <Image
      url={bannerImage.url}
      width={width}
      height={height}
      alt={bannerImage.title ?? 'Photography Banner'}
      priority
      sizes={sizes}
    />
  );
}
