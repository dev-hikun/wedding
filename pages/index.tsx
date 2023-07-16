import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from 'components/Home';
import Layout from 'components/Layout/Default';
import type { NextPageWithLayout } from 'types/common';

const MainPage: NextPageWithLayout = Home;

export default MainPage;
MainPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18nProps = await serverSideTranslations(locale || 'ko', ['common']);
  return {
    props: { locale, ...i18nProps },
  };
};
