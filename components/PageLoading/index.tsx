/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import animationData from 'assets/json/coupleLottie.json';
import { hiddenText } from 'assets/styles/mixins';
import Lottie from 'components/common/Lottie';
import LoadingContext from 'components/PageLoading/Context';
import type { FCChildren } from 'types/common';

const PageLoading: FCChildren = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingContext.Provider setIsLoading={setIsLoading}>{children}</LoadingContext.Provider>
      {isLoading && document && <Loading />}
    </>
  );
};

const Loading = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <Styled.Loading>
      <Styled.LottieWrapper>
        <Lottie animationData={animationData} width="100%" height="100%" />
        Loading...
      </Styled.LottieWrapper>
      <Styled.Text>페이지 로딩중입니다.</Styled.Text>
    </Styled.Loading>
  );
};

export default PageLoading;
const Styled = {
  Loading: styled.div(({ theme }) => ({
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
    background: theme.color.black040,
  })),
  Text: styled.span(hiddenText),
  LottieWrapper: styled.div(({ theme }) => ({
    width: '200px',
    textAlign: 'center',
    color: theme.color.white,
    svg: {
      marginBottom: theme.spacing[4],
    },
  })),
};
