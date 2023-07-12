import Styled from 'components/Panel/Styled';
import type { FCChildren } from 'types/common';

const Panel: FCChildren = ({ children, ...props }) => <Styled.Panel {...props}>{children}</Styled.Panel>;
export default Panel;
