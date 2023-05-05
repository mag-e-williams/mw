import { Project } from 'api/types/generated/contentfulApi.generated';
import { Image } from 'components/Image';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';

type ResumeCardProps = {
  resume?: Project;
};

export function ResumeBanner({ resume }: ResumeCardProps) {
  const { width, height, sizes } = useCurrentImageSizes();

  return (
    <Image
      url={resume?.thumbnail?.url}
      width={width}
      height={height}
      alt={resume?.thumbnail?.title ?? 'Resume Banner'}
      priority
      sizes={sizes}
    />
  );
}
