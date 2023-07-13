import { memo, type Dispatch, type SetStateAction, useRef, type FC } from 'react';

import type { AnimationItem } from 'lottie-web';

import animationData from 'assets/json/menuLottie.json';
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

  return (
    <IconButton
      size="md"
      css={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
      }}
      onClick={() => {
        setIsOpen((open) => {
          anim.current.setDirection(open ? -1 : 1);
          anim.current.play();
          return !open;
        });
      }}
    >
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
    </IconButton>
  );
};
export default memo(Menu);
