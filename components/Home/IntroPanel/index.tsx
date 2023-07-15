import { memo, useCallback } from 'react';

import Image from 'next/image';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/IntroPanel/Styled';
import usePageLoading from 'hooks/usePageLoading';

import introPhoto from 'assets/images/main-photo.png';
const IntroPanel = () => {
  const toggle = usePageLoading();
  const handleMainPhotoLoad = useCallback(() => setTimeout(() => toggle(false), 1500), [toggle]);

  return (
    <Styled.Panel>
      <Styled.ImageWrapper>
        <Image
          fill
          sizes="100%"
          src={introPhoto}
          alt="희현x스즈"
          placeholder="blur"
          blurDataURL={introPhoto.blurDataURL}
          onLoad={handleMainPhotoLoad}
        />
        <Styled.NoticeContainer>
          <Typography align="center" variant="introWe">
            우리,
          </Typography>
          <Typography variant="introMarriage">결혼</Typography>
          <Typography variant="introDo">합니다.</Typography>
        </Styled.NoticeContainer>
      </Styled.ImageWrapper>
      <Styled.BottomContainer>
        <Styled.NameContainer>
          <Typography align="center">이희현</Typography>
          <Typography align="center" variant="title14" className="and">
            그리고
          </Typography>
          <Typography align="center">오쿠다이라미스즈</Typography>
        </Styled.NameContainer>
        <div>
          <Typography color="gray" align="right" variant="title14">
            2023년 12월 09일 토요일 오후 다섯시
          </Typography>
          <Typography color="gray" align="right" variant="title14">
            라온제나 분당 플로렌스 단독홀
          </Typography>
        </div>
      </Styled.BottomContainer>
      <Styled.LineBox />
    </Styled.Panel>
  );
};
export default memo(IntroPanel);
