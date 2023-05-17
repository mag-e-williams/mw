import { FetchedFallbackData, fetchFallbackData } from 'api/fetchFallbackData';
import { PhotosPage } from 'components/photosPage/PhotosPage';
import { PageLayout } from 'components/layouts/PageLayout';
import type { GetStaticProps } from 'next/types';
import type { GetLayout } from 'types/Page';

type PageProps = {
  fallback: FetchedFallbackData<'footer'>;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => fetchFallbackData(['footer']);

function Page() {
  return <PhotosPage />;
}

const getLayout: GetLayout<PageProps> = (page, pageProps) => (
  <PageLayout fallback={pageProps.fallback}>{page}</PageLayout>
);

Page.getLayout = getLayout;

export default Page;
