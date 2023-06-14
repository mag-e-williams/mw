import { FetchedFallbackData, fetchFallbackData } from 'api/fetchFallbackData';
import { Homepage } from 'components/homepage/Homepage';
import { PageLayout } from 'components/layouts/PageLayout';
import type { GetStaticProps } from 'next/types';
import type { GetLayout } from 'types/Page';

type PageProps = {
  fallback: FetchedFallbackData<
    | 'footer'
    | 'location'
    | 'intro'
    | 'projects'
    | 'certifications'
    | 'latest/track'
    | 'version'
    | 'photos'
    | 'latest/movies'
    | 'latest/goodreads'
  >;
};

export const getStaticProps: GetStaticProps<PageProps> = async () =>
  fetchFallbackData([
    'footer',
    'projects',
    'intro',
    'location',
    'certifications',
    'latest/track',
    'version',
    'photos',
    'latest/movies',
    'latest/goodreads',
  ]);

function Page() {
  return <Homepage />;
}

const getLayout: GetLayout<PageProps> = (page, pageProps) => (
  <PageLayout fallback={pageProps.fallback}>{page}</PageLayout>
);

Page.getLayout = getLayout;

export default Page;
