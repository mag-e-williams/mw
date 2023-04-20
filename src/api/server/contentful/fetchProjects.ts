import { isProject } from 'api/parsers';
import { Project } from 'api/types/generated/contentfulApi.generated';
import type { ProjectsQuery } from 'api/types/generated/fetchProjects.generated';
import { gql } from 'graphql-request';
import { contentfulClient } from '../networkClients/contentfulClient';

const QUERY = gql`
  query Projects {
    sectionCollection(limit: 1, where: { title: "Projects" }) {
      items {
        contentCollection(limit: 100) {
          items {
            ... on Project {
              title
              description
              layout
              creationDate
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
            }
          }
        }
      }
    }
  }
`;

export async function fetchProjects(): Promise<Array<Project>> {
  const data = await contentfulClient.request<ProjectsQuery>(QUERY);
  const items =
    data?.sectionCollection?.items.flatMap((item) => item?.contentCollection?.items ?? []) ?? [];
  const projects = items.filter(isProject) ?? [];
  return projects;
}
