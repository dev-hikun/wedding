import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Home from 'components/Home';
import Layout from 'components/Layout/Default';
import type { NextPageWithLayout } from 'types/common';

const MainPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title key="title">이희현 & 미스즈 결혼합니다.</title>
      <meta name="viewport" content="initial-scale=1, height=device-height, width=device-width, shrink-to-fit=no" />
    </Head>
    <Home />
  </>
);

export default MainPage;
MainPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    // notFound: true,
    props: { locale },
  };
};
