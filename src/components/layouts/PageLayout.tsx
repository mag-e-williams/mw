import type { EndpointKey } from 'api/endpoints';
import { FetchedFallbackData } from 'api/fetchFallbackData';
import { Footer } from 'components/nav/Footer';
import { Header } from 'components/nav/Header';
import { Meta } from 'components/utilComponents/Meta';
import { ScrollIndicatorContext } from 'components/nav/ScrollIndicatorContext';
import { useShowScrollIndicator } from 'hooks/useShowScrollIndicator';
import { useRef } from 'react';
import { SWRConfig } from 'swr';
import { Container } from '@mui/material';
import { Section } from 'ui/Section';

/**
 * We have props that dictate a fallback for SWRConfig, plus children
 */
type PageLayoutProps<Keys extends EndpointKey> = {
  children: React.ReactNode;

  /**
   * Provides SWR with fallback version/header/footer data
   */
  fallback: FetchedFallbackData<Keys>;
};

/**
 * Basic page layout for every page. Has a sticky, contained header above
 * the main (contained) content, with a (contained) footer below. No wrapper
 * around all items to save on divs. Ensures color scheme is applied.
 */
export function PageLayout<Key extends EndpointKey>({ children, fallback }: PageLayoutProps<Key>) {
  const headerSizingRef = useRef<HTMLDivElement>(null);
  const { ref, isIndicatorShown } = useShowScrollIndicator(
    headerSizingRef.current?.getBoundingClientRect().height ?? 0,
  );
  return (
    <SWRConfig value={{ fallback }}>
      <Meta />
      <ScrollIndicatorContext.Provider value={isIndicatorShown}>
        <Header headerRef={headerSizingRef} />
        <Container component={Section}>
          <div aria-hidden ref={ref} style={{ height: 0, width: 0 }} />
          <main>{children}</main>
        </Container>
        <Footer />
      </ScrollIndicatorContext.Provider>
    </SWRConfig>
  );
}
