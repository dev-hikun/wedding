import { type FC, useEffect, useRef, forwardRef, type ForwardedRef, type Ref, memo } from 'react';

import styled from '@emotion/styled';
import lottie, { type AnimationItem, type AnimationConfig } from 'lottie-web';

import useForkRef from 'hooks/useForkRef';

export interface LottieProps {
  animationData: Record<string, unknown>;
  options?: Omit<AnimationConfig, 'container'>;
  height?: number | string;
  width?: number | string;
  className?: string;
  ref?: Ref<HTMLDivElement> | undefined;
  onAnimationComplete?: (animation: AnimationItem) => void;
}

const Lottie: FC<LottieProps> = forwardRef(
  (
    { className, animationData, width, height, onAnimationComplete, options },
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    const lottieContainer = useRef<HTMLDivElement>(null);
    const wrapperRef = useForkRef([lottieContainer, forwardedRef]);

    useEffect(() => {
      if (lottieContainer.current) {
        const animation: AnimationItem = lottie.loadAnimation({
          container: lottieContainer.current,
          renderer: 'svg',
          animationData,
          ...options,
        });
        onAnimationComplete?.(animation);

        return () => {
          animation.destroy();
        };
      }
    }, [options, animationData, onAnimationComplete]);

    return <Wrapper ref={wrapperRef} width={width} height={height} className={className} />;
  }
);
Lottie.displayName = 'Lottie';

export default memo(Lottie);

type WrapperProps = {
  width?: number | string;
  height?: number | string;
};
const Wrapper = styled.div<WrapperProps>(({ width, height }) => ({
  display: 'flex',
  width: width || '100%',
  height: height || '100%',
}));
