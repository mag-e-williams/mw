import { ContentCardProps } from 'components/ContentCard';
import { Project } from 'api/types/generated/contentfulApi.generated';
import { Image } from 'components/Image';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photoBanner?: Project;
};

export function PhotographyBanner({ photoBanner }: PhotographyCardProps) {
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
