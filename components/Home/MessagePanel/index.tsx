import Image from 'next/image';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/MessagePanel/Styled';
import Line from 'components/Panel/Line';

import leaf from 'assets/images/leaf.png';

const MessagePanel = () => {
  return (
    <Styled.Panel paper>
      <Image width={leaf.width / 2} height={leaf.height / 2} src={leaf} alt="나무 이미지" />
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

      <Line />

      <Styled.FamilyContainer>
        <Styled.NameContainer>
          <Styled.ParentNames whiteSpace="pre-wrap" align="justify">
            {'이   규 근\n손        란'}
          </Styled.ParentNames>
          <Typography variant="body2">의 장남</Typography>
          <Styled.HeroName variant="title20" align="right">
            이희현
          </Styled.HeroName>
        </Styled.NameContainer>
        <Styled.NameContainer>
          <Styled.ParentNames whiteSpace="pre-wrap" align="justify">
            {'오쿠다이라 카즈오\n오쿠다이라 미츠코'}
          </Styled.ParentNames>
          <Typography variant="body2">의 차녀</Typography>
          <Styled.HeroName variant="title20" align="right">
            미스즈
          </Styled.HeroName>
        </Styled.NameContainer>
      </Styled.FamilyContainer>
    </Styled.Panel>
  );
};
export default MessagePanel;
