import { useEffect } from 'react';

import styled from '@emotion/styled';

import animationData from 'assets/json/coupleLottie.json';
import { hiddenText } from 'assets/styles/mixins';
import theme from 'assets/styles/theme';
import Lottie from 'components/common/Lottie';
const Loading = () => {
  useEffect(() => {
    typeof document !== 'undefined' &&
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  }, []);
  return (
    <Styled.Loading>
      <Styled.LottieWrapper>
        <Lottie animationData={animationData} width="100%" height="100%" />
        잠시만 기다려주세요
      </Styled.LottieWrapper>
      <Styled.Text>페이지 로딩중입니다.</Styled.Text>
    </Styled.Loading>
  );
};

export default Loading;

const Styled = {
  Loading: styled.div({
    zIndex: theme.zIndex.loading,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: theme.color.white,
  }),
  Text: styled.span(hiddenText),
  LottieWrapper: styled.div({
    width: '200px',
    textAlign: 'center',
    color: theme.color.text,
    svg: {
      marginBottom: theme.spacing[4],
    },
  }),
};
