import type {
  CertificationBadge,
  IntroBlock,
  Link,
  Project,
  TextBlock,
} from 'api/types/generated/contentfulApi.generated';

export const isLink = (item: Link | undefined | Record<string, unknown>): item is Link =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  !!(item as Link)?.title;

export const isProject = (item: Project | undefined | Record<string, unknown>): item is Project =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  !!(item as Project)?.creationDate && !!(item as Project)?.thumbnail;

export const isCertification = (
  item: CertificationBadge | undefined | Record<string, unknown>,
): item is CertificationBadge =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  !!(item as CertificationBadge)?.org && !!(item as CertificationBadge)?.thumbnail;

export const isTextBlock = (
  item: TextBlock | undefined | Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
): item is TextBlock => !!(item as TextBlock)?.content?.json;

export const isIntroBlock = (
  item: IntroBlock | undefined | Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
): item is IntroBlock => !!(item as IntroBlock)?.headshot;

export const isDefinedItem = <Type>(item: Type | undefined | null): item is Type =>
  item !== undefined && item !== null;

export const findLinkWithName = (links: Array<Link> | undefined, name: string): Link | undefined =>
  links?.find((link) => link.title?.includes(name));

export const findProjectWithName = (
  projects: Array<Project> | undefined,
  name: string,
): Project | undefined => projects?.find((project) => project.title?.includes(name));

export const isRecord = (input: unknown): input is Record<string, unknown> =>
  typeof input === 'object' && !!input && !Array.isArray(input);
