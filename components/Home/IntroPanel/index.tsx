import { Fragment, memo } from 'react';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/IntroPanel/Styled';

import introPhoto from 'public/photos/wedding02.jpg';
const IntroPanel = ({ locale }) => {
  const { t } = useTranslation();
  const isKorean = locale === 'ko';
  const Ruby = isKorean ? Fragment : 'ruby';
  return (
    <Styled.Panel>
      <Styled.ImageWrapper>
        <Image
          fill
          sizes="100%"
          src={introPhoto}
          alt="희현x스즈"
          loading="lazy"
          placeholder="blur"
          blurDataURL={introPhoto.blurDataURL}
        />
        <Styled.NoticeContainer>
          <Typography align="center" variant="introWe">
            {t('우리')}
          </Typography>
          <Typography variant="introMarriage">{t('결혼')}</Typography>
          <Typography variant="introDo">{t('합니다.')}</Typography>
        </Styled.NoticeContainer>
      </Styled.ImageWrapper>
      <Styled.BottomContainer>
        <Styled.NameContainer>
          <Typography align="center">
            <Ruby>
              {t('이 희현')}
              {!isKorean && <rt>イ・ヒィヒョン</rt>}
            </Ruby>
          </Typography>
          <Typography align="center" variant="title14" className="and">
            {t('그리고')}
          </Typography>
          <Typography align="center">{t('오쿠다이라 미스즈')}</Typography>
        </Styled.NameContainer>
        <div>
          <Typography color="gray" align="right" variant="title14">
            {t('2023년 12월 09일 토요일 오후 다섯시')}
          </Typography>
          <Typography color="gray" align="right" variant="title14">
            {t('라온제나 분당 플로렌스 단독홀')}
          </Typography>
        </div>
      </Styled.BottomContainer>
      <Styled.LineBox />
    </Styled.Panel>
  );
};
export default memo(IntroPanel);
