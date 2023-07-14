import type { ComponentPropsWithoutRef } from 'react';

import Styled from 'components/Panel/Styled';
import type { FCChildren } from 'types/common';

import paperImg from 'assets/images/paper-background.png';

interface Panel extends ComponentPropsWithoutRef<'div'> {
  paper?: boolean;
}
const Panel: FCChildren<Panel> = ({ children, className, paper = false, ...props }) => (
  <Styled.Panel {...props}>
    {paper && (
      <Styled.Background
        fill
        src={paperImg}
        alt=""
        sizes="30vw"
        placeholder="blur"
        blurDataURL={paperImg.blurDataURL}
      />
    )}
    <div css={{ position: 'relative', zIndex: 1, height: '100%' }} className={className}>
      {children}
    </div>
  </Styled.Panel>
);
export default Panel;
