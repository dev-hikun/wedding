import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Gallery from 'components/Home/Gallery';
import HallInformation from 'components/Home/HallInformationPanel';
import IntroPanel from 'components/Home/IntroPanel';
import MessagePanel from 'components/Home/MessagePanel';
import Styled from 'components/Home/Styled';
import type { NextPageWithLayout } from 'types/common';

const Home: NextPageWithLayout<{ locale?: string }> = ({ locale }) => {
  const { t } = useTranslation();
  const titleMessage = `${t('희현')}&${t('미스즈')} ${t('결혼')}${t('합니다.')}`;
  return (
    <>
      <Head>
        <title key="title">{titleMessage}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta
          name="description"
          content={`${t('2023년 12월 09일 토요일 오후 다섯시')} ${t('라온제나 분당 플로렌스 단독홀')}`}
        />

        <meta property="og:url" content="https://hikun-suzu.netlify.app/" />
        <meta property="og:title" content={titleMessage} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hikun-suzu.netlify.app/photos/wedding02.jpg" />
      </Head>
      <Styled.Container>
        <IntroPanel locale={locale} />
        <MessagePanel locale={locale} />
        <Gallery />
        <HallInformation locale={locale} />
      </Styled.Container>
    </>
  );
};
export default Home;
