import { useEffect } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import type { AppProps as NextAppProps } from 'next/app';

import GlobalStyles from 'assets/styles/GlobalStyles';
import getTheme from 'assets/styles/theme';
import DefaultLayout from 'components/Layout/Default';
import PageLoading from 'components/PageLoading';
import type { Locale, NextPageWithLayout } from 'types/common';

const cache = createCache({ key: 'wedding' });

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
interface AppProps extends NextAppProps<Locale> {
  Component: NextPageWithLayout;
}
const App = ({ Component, pageProps }: AppProps) => {
  const theme = getTheme({ locale: pageProps.locale });
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    if (window) {
      setVH();
      window.addEventListener('resize', setVH);
      window.addEventListener('touchend', setVH);
      return () => {
        window.removeEventListener('resize', setVH);
        window.removeEventListener('touchend', setVH);
      };
    }
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageLoading>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageLoading>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
