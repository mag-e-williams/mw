import { isCertification } from 'api/parsers';
import { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { CertificationsQuery } from 'api/types/generated/fetchCertifications.generated';
import { gql } from 'graphql-request';
import { contentfulClient } from '../networkClients/contentfulClient';

const QUERY = gql`
  query Certifications {
    sectionCollection(limit: 1, where: { title: "Certifications" }) {
      items {
        contentCollection(limit: 100) {
          items {
            ... on CertificationBadge {
              title
              level
              description
              org {
                ... on CertificationOrg {
                  title
                  abbreviation
                  link {
                    ... on Link {
                      url
                    }
                  }
                }
              }
              link {
                ... on Link {
                  url
                }
              }
              thumbnail {
                url(transform: { quality: 90, format: WEBP })
                width
                height
              }
              visible
            }
          }
        }
      }
    }
  }
`;

export async function fetchCertifications(): Promise<Array<CertificationBadge>> {
  const data = await contentfulClient.request<CertificationsQuery>(QUERY);
  const items =
    data?.sectionCollection?.items.flatMap((item) => item?.contentCollection?.items ?? []) ?? [];
  const certifications = items.filter(isCertification) ?? [];
  return certifications;
}
