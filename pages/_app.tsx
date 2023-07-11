import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import type { AppProps as NextAppProps } from 'next/app';

import GlobalStyles from 'assets/styles/GlobalStyles';
import DefaultLayout from 'components/Layout';
import { Locale, NextPageWithLayout } from 'types/common';

const cache = createCache({ key: 'next' });

interface AppProps extends NextAppProps<Locale> {
  Component: NextPageWithLayout;
}
const App = ({ Component, pageProps }: AppProps) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider
        theme={{
          locale: pageProps.locale,
        }}
      >
        <GlobalStyles />
        <Layout locale={pageProps.locale}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
