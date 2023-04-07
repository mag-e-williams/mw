import { FetchedFallbackData, fetchFallbackData } from 'api/fetchFallbackData';
import { PageLayout } from 'components/layouts/PageLayout';
import { Privacy } from 'components/privacy/Privacy';
import type { GetStaticProps } from 'next/types';
import type { GetLayout } from 'types/Page';

type PageProps = {
  fallback: FetchedFallbackData<'footer' | 'privacy'>;
};

export const getStaticProps: GetStaticProps<PageProps> = async () =>
  fetchFallbackData(['footer', 'privacy']);

function Page() {
  return <Privacy />;
}

const getLayout: GetLayout<PageProps> = (page, pageProps) => (
  <PageLayout fallback={pageProps.fallback}>{page}</PageLayout>
);

Page.getLayout = getLayout;

export default Page;
