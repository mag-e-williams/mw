import type { GithubRepoVersionQuery } from 'api/types/generated/fetchRepoVersion.generated';
import { gql } from 'graphql-request';
import { githubClient } from '../networkClients/githubClient';

const QUERY = gql`
  query GithubRepoVersion {
    repository(name: "mw", owner: "mag-e-williams") {
      releases(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          tagCommit {
            oid
          }
        }
      }
    }
  }
`;

export async function fetchRepoVersion(): Promise<string | null> {
  const version = process.env.NEXT_PUBLIC_APP_VERSION;
  if (version?.length) {
    return version;
  }

  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
  const data = await githubClient.request<GithubRepoVersionQuery>(QUERY);
  const releases = data?.repository?.releases?.nodes;
  const filteredReleases =
    releases?.filter((release) => release?.tagCommit?.oid === commitSha?.trim()) ?? [];
  return filteredReleases[0]?.name ?? commitSha?.slice(-12) ?? null;
}
