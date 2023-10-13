import styled from '@emotion/styled';

import { HideScrollbarStyle } from 'assets/styles/mixins';
import { Button } from 'components/common/Button';
import Typography from 'components/common/Typography';
import PanelComponent from 'components/Panel';
import { color, spacing } from 'constants/theme';

const Panel = styled(PanelComponent)({
  display: 'flex',
  zIndex: 1001,
  flexDirection: 'column',
  backgroundColor: color.white,
  height: '100%',
  maxHeight: '100vh',
});

const ChatRoom = styled.div(HideScrollbarStyle, {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 100%',
  position: 'relative',
  maxHeight: 'calc(100% - 100px)',
  overflow: 'auto',
  padding: `${spacing[16]}px ${spacing[16]}px ${spacing[64]}px`,
  border: '1px solid ' + color.gray100,
  gap: spacing[24],
});

const ButtonArea = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0 0 0 0;
  z-index: 1002;
  background: ${color.black040};
  transition: background-color 0.1s;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${color.white};
  width: 80%;
  border-radius: 8px;
  padding: ${spacing[16]}px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 16px;
  padding: ${spacing[8]}px ${spacing[8]}px;
  background-color: ${color.gray050};
  margin-bottom: ${spacing[16]}px;
  border-radius: 4px;
`;

const TextArea = styled(Input)`
  resize: vertical;
`.withComponent('textarea');

const Title = styled(Typography)`
  margin-bottom: ${spacing[8]}px;
`.withComponent('label');

const BottomButton = styled(Button)`
  &&& {
    width: 100%;
    padding: ${spacing[8]}px;
    background-color: ${color.blue};
    color: ${color.gray050};
    border-radius: 8px;
  }

  &.loading {
    cursor: wait;
  }
`;

const Styled = {
  Panel,
  ChatRoom,
  ButtonArea,
  Background,
  Paper,
  Input,
  Title,
  TextArea,
  BottomButton,
  Form,
};
export default Styled;
