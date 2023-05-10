import type { ContentCardProps } from 'components/ContentCard';

type PhotographyCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  photos: Array<string> | undefined;
};

export function PhotographyContent({ photos }: PhotographyCardProps) {
  // eslint-disable-next-line no-console
  console.log(photos);
  return <>hello</>;
}
