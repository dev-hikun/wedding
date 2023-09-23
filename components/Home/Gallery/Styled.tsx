import styled from '@emotion/styled';

import PanelComponent from 'components/Panel';
import { color, spacing } from 'constants/theme';

const Panel = styled(PanelComponent)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: color.white,
  gap: spacing[16],
  padding: spacing[16],
});

const List = styled.ul({
  display: 'flex',
});

const Styled = {
  Panel,
  List,
};
export default Styled;
