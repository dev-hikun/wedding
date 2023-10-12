import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Gallery from 'components/Home/Gallery';
import GuestBook from 'components/Home/GuestBook';
import HallInformation from 'components/Home/HallInformationPanel';
import IntroPanel from 'components/Home/IntroPanel';
import MessagePanel from 'components/Home/MessagePanel';
import Styled from 'components/Home/Styled';
import { color, spacing } from 'constants/theme';
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
        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20231209T080000Z/20231209T100000Z&location=%EB%9D%BC%EC%98%A8%EC%A0%9C%EB%82%98%EB%B6%84%EB%8B%B9,%20Seongnam-si,%20South%20Korea&text=%ED%9D%AC%ED%98%84+%26+%EB%AF%B8%EC%8A%A4%EC%A6%88+%EA%B2%B0%ED%98%BC%EC%8B%9D"
          target="_blank"
          title={t('캘린더에 추가하기')}
          css={{
            width: '100%',
            padding: spacing[16],
            backgroundColor: color.green,
            color: color.text,
            // margin: `${spacing[16]}px 0`,
            textAlign: 'center',
          }}
        >
          🗓 {t('캘린더에 추가하기')}
        </a>
        <MessagePanel locale={locale} />
        <Gallery />
        <HallInformation locale={locale} />
        <GuestBook />
      </Styled.Container>
    </>
  );
};
export default Home;
