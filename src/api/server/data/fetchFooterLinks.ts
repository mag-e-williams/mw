import { footerLinks } from 'api/types/mockData/FooterLinks';
import { LinkType } from 'api/types/Link';
import { gql } from 'graphql-request';
import { isDefinedItem, isLink } from 'api/parsers';
import type { Link } from 'api/types/generated/contentfulApi.generated';
import type { FooterQuery } from 'api/types/generated/fetchFooterLinks.generated';
import { contentfulClient } from '../networkClients/contentfulClient';

/**
 * Grabs the contentful sections with the title of footer. Should
 * be only one.
 */
const QUERY = gql`
  query Footer {
    linkCollection(limit: 100) {
      items {
        ... on Link {
          title
          url
          icon
        }
      }
    }
  }
`;

export async function fetchFooterLinks(): Promise<Array<Link>> {
  const data = await contentfulClient.request<FooterQuery>(QUERY);
  const items = data.linkCollection.items.flatMap((item) => item);
  return items;
}
