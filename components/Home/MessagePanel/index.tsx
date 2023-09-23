import { Fragment } from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/MessagePanel/Styled';
import Line from 'components/Panel/Line';

import leaf from 'assets/images/leaf.png';

const MessagePanel = ({ locale }) => {
  const { t } = useTranslation();
  const isKorean = locale === 'ko';
  const Ruby = isKorean ? Fragment : 'ruby';
  return (
    <Styled.Panel paper>
      <Image width={leaf.width / 2} height={leaf.height / 2} src={leaf} alt="나무 이미지" />
      {isKorean ? (
        <Styled.TextWrapper>
          <div>
            <Typography align="center" variant="body2">
              국가도, 살아온 배경도 다른 저희가
            </Typography>
            <Typography align="center" variant="body2">
              네번의 겨울을 함께하고 맞이한 다섯번째 겨울
            </Typography>
          </div>
          <div>
            <Typography align="center" variant="body2">
              소중한 분들을 모시고
            </Typography>
            <Typography align="center" variant="body2">
              깊은 사랑의 언약을 하려 합니다.
            </Typography>
            <Typography align="center" variant="body2">
              춥지만 좋은 날, 따뜻한 발걸음을 해주신다면
            </Typography>
            <Typography align="center" variant="body2">
              더할나위 없이 훈훈하게 살겠습니다.
            </Typography>
          </div>
        </Styled.TextWrapper>
      ) : (
        <Styled.TextWrapper className="jp">
          <div>
            <Typography align="center" variant="body2">
              皆様におかれましては
            </Typography>
            <Typography align="center" variant="body2">
              益々ご清祥のこととお慶び申し上げます
            </Typography>
          </div>
          <div>
            <Typography align="center" variant="body2">
              このたび
            </Typography>
            <Typography align="center" variant="body2">
              私たちは結婚式を挙げることとなりました
            </Typography>
          </div>
          <div>
            <Typography align="center" variant="body2">
              つきましては 末永くご懇情を賜りたく
            </Typography>
            <Typography align="center" variant="body2">
              ささやかではございますが
            </Typography>
            <Typography align="center" variant="body2">
              小宴を催したく存じます
            </Typography>
          </div>
          <div>
            <Typography align="center" variant="body2">
              ご多用中まことに恐縮ではございますが
            </Typography>
            <Typography align="center" variant="body2">
              何とぞご臨席賜りますよう
            </Typography>
            <Typography align="center" variant="body2">
              ご案内申し上げます
            </Typography>
          </div>
        </Styled.TextWrapper>
      )}

      <Line />

      <Styled.FamilyContainer>
        <Styled.NameContainer>
          <Styled.ParentNames whiteSpace="pre-wrap" variant="title18" align="justify">
            <Ruby>
              {t('이 규근')}
              {!isKorean && <rt>イ・ギュグン</rt>}
            </Ruby>
            {'\n'}
            <Ruby>
              {t('손 란')}
              {!isKorean && <rt>ソン・ラン</rt>}
            </Ruby>
          </Styled.ParentNames>
          <Typography variant="body2">{t('의 장남')}</Typography>
          <Styled.HeroName variant="title20" align="right">
            {t('희현')}
          </Styled.HeroName>
        </Styled.NameContainer>
        <Styled.NameContainer>
          <Styled.ParentNames whiteSpace="pre-wrap" variant="title18" align="justify">
            {t('오쿠다이라 카즈오')}
            {'\n'}
            {t('오쿠다이라 미츠코')}
          </Styled.ParentNames>
          <Typography variant="body2">{t('의 차녀')}</Typography>
          <Styled.HeroName variant="title20" align="right">
            {t('미스즈')}
          </Styled.HeroName>
        </Styled.NameContainer>
      </Styled.FamilyContainer>
    </Styled.Panel>
  );
};
export default MessagePanel;
