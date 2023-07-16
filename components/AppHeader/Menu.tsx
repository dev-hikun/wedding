import { memo, type Dispatch, type SetStateAction, useRef, type FC } from 'react';

import styled from '@emotion/styled';
import type { AnimationItem } from 'lottie-web';

import animationData from 'assets/json/menuLottie.json';
import theme from 'assets/styles/theme';
import IconButton from 'components/common/Button/IconButton';
import Lottie from 'components/common/Lottie';

interface MenuProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<MenuProps> = ({ setIsOpen }) => {
  const anim = useRef<AnimationItem | null>(null);

  const handleAnimationComplete = (item: AnimationItem) => {
    item.setSpeed(2);
    anim.current = item;
  };

  const handleButtonClick = () => {
    setIsOpen((open) => {
      anim.current.setDirection(open ? -1 : 1);
      anim.current.play();
      return !open;
    });
  };

  return (
    <Styled.Button size="md" onClick={handleButtonClick}>
      <Lottie
        animationData={animationData}
        width={24}
        height={24}
        options={{
          autoplay: false,
          loop: false,
        }}
        onAnimationComplete={handleAnimationComplete}
      />
    </Styled.Button>
  );
};
export default memo(Menu);

const Styled = {
  Button: styled(IconButton)({
    position: 'fixed',
    top: 16,
    right: 16,
    zIndex: theme.zIndex.header + 1,
    backgroundColor: theme.color.white040,
    borderRadius: 4,
    '&&&': {
      padding: theme.spacing[4],
    },
  }),
};
