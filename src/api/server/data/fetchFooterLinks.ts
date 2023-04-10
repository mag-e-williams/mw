import { footerLinks } from 'api/types/mockData/FooterLinks';
import { LinkType } from 'api/types/Link';

export function fetchFooterLinks(): LinkType[] {
  return footerLinks;
}
