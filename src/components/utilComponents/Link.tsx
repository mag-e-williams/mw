/* eslint-disable no-restricted-imports */
import { FaIcon } from 'components/utilComponents/FaIcon';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faFileLines } from '@fortawesome/free-solid-svg-icons/faFileLines';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons/faHackerrank';
// import { faGoodreads } from '@fortawesome/free-brands-svg-icons/faGoodreads';
import { faGoodreadsG } from '@fortawesome/free-brands-svg-icons/faGoodreadsG';

import NextLink from 'next/link';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  Tooltip,
  ButtonProps,
  Button,
} from '@mui/material';
import { SxProps } from 'ui/theme';
import Image from 'next/image';

type BaseLinkProps = {
  title?: string;
  href: string | undefined;
  img?: string | undefined;
  icon?: string;
  tooltipPlacement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start'
    | undefined;
  /**
   * Can be missing for icon-only links
   */
  children?: React.ReactNode;
  sx?: SxProps;

  /**
   * Renders as a certain type of layout.
   * 1. 'text' renders just plain text
   * 2. 'icon' renders the icon with a tooltip
   * 3. 'iconText' renders the icon without a tooltip, next to text
   * 5. 'children' renders just some children
   */
  layout?: 'text' | 'icon' | 'iconText' | 'image';

  /**
   * Defaults to false, but can be set to true to add target="_blank" and
   * rel="noreferrer"
   */
  isExternal?: boolean;
};

/**
 * Either provides MUI link or button props depending on type
 */
type LinkProps = BaseLinkProps &
  (
    | { isButton: true; buttonProps?: ButtonProps; linkProps?: never }
    | { isButton?: never; linkProps?: MuiLinkProps; buttonProps?: never }
  );

/**
 * All built in mappings for icon name to element
 */
const BUILT_IN_ICONS: Record<string, JSX.Element> = {
  spotify: <FaIcon icon={faSpotify} />,
  github: <FaIcon icon={faGithubAlt} />,
  linkedin: <FaIcon icon={faLinkedinIn} />,
  instagram: <FaIcon icon={faInstagram} />,
  about: <FaIcon icon={faQuestion} />,
  email: <FaIcon icon={faPaperPlane} />,
  resume: <FaIcon icon={faFileLines} />,
  film: <FaIcon icon={faFilm} />,
  award: <FaIcon icon={faAward} />,
  hackerrank: <FaIcon icon={faHackerrank} />,
  goodreads: <FaIcon icon={faGoodreadsG} />,
};

/**
 * If there's an icon, returns it, either built in or not, along with its title if
 * the layout calls for it.
 */
const createIconElement = ({ icon, layout = 'text' }: Pick<BaseLinkProps, 'icon' | 'layout'>) =>
  icon && !['children', 'text'].includes(layout)
    ? // eslint-disable-next-line react/no-danger
      BUILT_IN_ICONS[icon] ?? <span dangerouslySetInnerHTML={{ __html: icon }} />
    : null;

/**
 * Renders a link component from Contentful. Sometimes the icons are
 * just specifications for what to render using an icon library,
 * sometimes they're actual SVG html. Renders according to the layout,
 * or defaults to `icon` if one is specified, otherwise `text`. Returns
 * null if no link at all.
 */
export function Link({
  title,
  href,
  img,
  icon,
  children,
  isButton,
  isExternal,
  tooltipPlacement,
  layout: initialLayout = 'text',
  sx,
  linkProps,
  buttonProps,
}: LinkProps) {
  /**
   * Generates a layout enum for use in computing the contents
   */
  const layout = (() => {
    if (children) {
      return 'children';
    }
    if (initialLayout === 'text' && title) {
      return 'text';
    }
    if (['img', 'image'].includes(initialLayout) && img) {
      return 'image';
    }
    if (['icon', 'iconText'].includes(initialLayout) && icon) {
      return initialLayout;
    }
    return 'text';
  })();

  if (!href || !layout) {
    return null;
  }
  // Tooltip shows up when there's just an icon, otherwise not needed
  const tooltipTitle = layout === 'icon' ? title : null;
  const iconTooltipPlacement = tooltipPlacement || 'top';
  // If there's a custom or built in icon, create a link around it
  const contents = (() => {
    switch (layout) {
      case 'icon':
        return createIconElement({ icon, layout });
      case 'image':
        return <Image src="/icons/mw-logo.svg" alt="mw." width={100} height={50} priority />;
      case 'iconText':
        return (
          <>
            {createIconElement({ icon, layout })}
            <span style={{ marginLeft: 4 }}>{title}</span>
          </>
        );
      case 'text':
        return title;
      case 'children':
        return children;
    }
  })();
  const sharedProps = {
    component: NextLink,
    href,
    'aria-label': title,
    ...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {}),
    sx,
  };
  return (
    <Tooltip title={tooltipTitle} placement={iconTooltipPlacement}>
      {isButton ? (
        <Button {...buttonProps} {...sharedProps}>
          {contents}
        </Button>
      ) : (
        <MuiLink {...linkProps} {...sharedProps}>
          {contents}
        </MuiLink>
      )}
    </Tooltip>
  );
}
