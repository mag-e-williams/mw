import { gql } from 'graphql-request';
import type { Link } from 'api/types/generated/contentfulApi.generated';
import type { FooterQuery } from 'api/types/generated/fetchFooterLinks.generated';
import { isDefinedItem, isLink } from 'api/parsers';
import { contentfulClient } from '../networkClients/contentfulClient';

const QUERY = gql`
  query Footer {
    sectionCollection(limit: 1, where: { title: "Footer" }) {
      items {
        contentCollection(limit: 100) {
          items {
            ... on Link {
              title
              url
              icon
            }
          }
        }
      }
    }
  }
`;

export async function fetchFooterLinks(): Promise<Array<Link>> {
  const data = await contentfulClient.request<FooterQuery>(QUERY);
  const items =
    data?.sectionCollection?.items.flatMap((item) => item?.contentCollection?.items ?? []) ?? [];
  const links = items.filter(isLink).filter(isDefinedItem);
  return links;
}
