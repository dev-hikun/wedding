import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Home from 'components/Home';
import Layout from 'components/Layout/Default';
import type { NextPageWithLayout } from 'types/common';

const MainPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title key="title">희현 & 미스즈 결혼합니다</title>
      <meta
        name="description"
        content="2023년 12월 9일 오후 다섯시 라온제나 분당 플로렌스 단독홀, 부디 오셔서 축복해주세요."
      />
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
