import type { ComponentPropsWithoutRef } from 'react';

import Styled from 'components/Panel/Styled';
import type { FCChildren } from 'types/common';

import paperImg from 'assets/images/paper-background.png';

interface Panel extends ComponentPropsWithoutRef<'div'> {
  paper?: boolean;
}
const Panel: FCChildren<Panel> = ({ children, paper = false, ...props }) => (
  <Styled.Panel {...props}>
    {paper && <Styled.Background fill src={paperImg} alt="" sizes="30vw" />}
    {children}
  </Styled.Panel>
);
export default Panel;
