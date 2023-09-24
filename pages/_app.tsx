import { useEffect } from 'react';

import type { AppProps as NextAppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { ja, ko } from 'assets/fonts';
import GlobalStyles from 'assets/styles/GlobalStyles';
import FirebaseContext from 'components/Firebase/Context';
import DefaultLayout from 'components/Layout/Default';
import PageLoading from 'components/PageLoading';
import type { NextPageWithLayout } from 'types/common';
import { clsx } from 'utils/common';

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
    }
  }, []);

  return (
    <div className={clsx([ko.variable, ja.variable])}>
      <GlobalStyles />
      <PageLoading>
        <FirebaseContext.Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FirebaseContext.Provider>
      </PageLoading>
    </div>
  );
};

export default appWithTranslation(App);
