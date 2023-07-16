import { useEffect } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { AppProps as NextAppProps } from 'next/app';

import GlobalStyles from 'assets/styles/GlobalStyles';
import DefaultLayout from 'components/Layout/Default';
import PageLoading from 'components/PageLoading';
import type { NextPageWithLayout } from 'types/common';

const cache = createCache({ key: 'wedding' });

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
interface AppProps extends NextAppProps {
  Component: NextPageWithLayout;
}
const App = ({ Component, pageProps }: AppProps) => {
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
      <GlobalStyles />
      <PageLoading>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageLoading>
    </CacheProvider>
  );
};

export default App;
