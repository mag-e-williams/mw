import { isIntroBlock } from 'api/parsers';
import type { IntroBlock } from 'api/types/generated/contentfulApi.generated';
import type { IntroContentQuery } from 'api/types/generated/fetchIntroContent.generated';
import { gql } from 'graphql-request';
import { contentfulClient } from '../networkClients/contentfulClient';

const QUERY = gql`
  query IntroContent {
    sectionCollection(limit: 1, where: { title: "Intro" }) {
      items {
        contentCollection(limit: 1) {
          items {
            ... on IntroBlock {
              headshot {
                url(transform: { quality: 90, format: WEBP })
                width
                height
              }
              textBlock {
                json
                links {
                  entries {
                    inline {
                      ... on Link {
                        title
                        url
                        icon
                      }
                    }
                    block {
                      ... on Link {
                        title
                        url
                        icon
                      }
                    }
                  }
                  assets {
                    block {
                      sys {
                        id
                      }
                      url
                      title
                      width
                      height
                      description
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function fetchIntroContent(): Promise<IntroBlock | undefined> {
  const data = await contentfulClient.request<IntroContentQuery>(QUERY);
  const items =
    data?.sectionCollection?.items.flatMap((item) => item?.contentCollection?.items ?? []) ?? [];
  const textBlock = items.filter(isIntroBlock)?.[0];
  return textBlock;
}
