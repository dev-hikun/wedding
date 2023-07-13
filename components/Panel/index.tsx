import type { ComponentPropsWithoutRef } from 'react';

import Styled from 'components/Panel/Styled';
import type { FCChildren } from 'types/common';

const Panel: FCChildren<ComponentPropsWithoutRef<'div'>> = ({ children, ...props }) => (
  <Styled.Panel {...props}>{children}</Styled.Panel>
);
export default Panel;
