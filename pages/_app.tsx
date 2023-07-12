import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import type { AppProps as NextAppProps } from 'next/app';

import GlobalStyles from 'assets/styles/GlobalStyles';
import getTheme from 'assets/styles/theme';
import DefaultLayout from 'components/Layout/Default';
import type { Locale, NextPageWithLayout } from 'types/common';

const cache = createCache({ key: 'next' });

interface AppProps extends NextAppProps<Locale> {
  Component: NextPageWithLayout;
}
const App = ({ Component, pageProps }: AppProps) => {
  const Layout = Component.Layout || DefaultLayout;
  const theme = getTheme({ locale: pageProps.locale });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout locale={pageProps.locale}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
