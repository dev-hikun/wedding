/* eslint-disable prettier/prettier */
import { createContext, useState, type Dispatch, type SetStateAction } from 'react';

import styled from '@emotion/styled';

import animationData from 'assets/json/coupleLottie.json';
import { hiddenText } from 'assets/styles/mixins';
import Lottie from 'components/common/Lottie';
import type { FCChildren } from 'types/common';

export const LoadingContext = createContext<{
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLoading: () => {},
});

const PageLoading: FCChildren = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ setIsLoading }}>
      {children}
      {isLoading && (
        <Styled.Loading>
          <Styled.LottieWrapper>
            <Lottie animationData={animationData} width="100%" height="100%" />
            Loading...
          </Styled.LottieWrapper>
          <Styled.Text>페이지 로딩중입니다.</Styled.Text>
        </Styled.Loading>
      )}
    </LoadingContext.Provider>
  );
};
export default PageLoading;
const Styled = {
  Loading: styled.div(({ theme }) => ({
    zIndex: theme.zIndex.loading,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '100%',
    height: 'max(calc(var(--vh, 1) * 100), 360px)',
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
