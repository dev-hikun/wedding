import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Gallery from 'components/Home/Gallery';
import HallInformation from 'components/Home/HallInformationPanel';
import IntroPanel from 'components/Home/IntroPanel';
import MessagePanel from 'components/Home/MessagePanel';
import Styled from 'components/Home/Styled';
import type { NextPageWithLayout } from 'types/common';

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const titleMessage = `${t('희현')} & 미스즈 결혼합니다`;
  return (
    <>
      <Head>
        <title key="title">{titleMessage}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta
          name="description"
          content="2023년 12월 9일 오후 다섯시 라온제나 분당 플로렌스 단독홀, 부디 오셔서 축복해주세요."
        />
      </Head>
      <Styled.Container>
        <IntroPanel />
        <MessagePanel />
        <Gallery />
        <HallInformation />
      </Styled.Container>
    </>
  );
};
export default Home;
