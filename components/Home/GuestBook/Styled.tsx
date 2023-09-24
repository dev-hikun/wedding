import styled from '@emotion/styled';

import { HideScrollbarStyle } from 'assets/styles/mixins';
import PanelComponent from 'components/Panel';
import { color, spacing } from 'constants/theme';

const Panel = styled(PanelComponent)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: color.white,
  height: '100%',
});
const ChatRoom = styled.div(HideScrollbarStyle, {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 100%',
  maxHeight: 'calc(max(calc(var(--vh, 1) * 100), 667px) - 50px)',
  overflow: 'auto',
  padding: spacing[16],
  border: '1px solid ' + color.gray100,
  gap: spacing[24],
});

const Styled = {
  Panel,
  ChatRoom,
};
export default Styled;
