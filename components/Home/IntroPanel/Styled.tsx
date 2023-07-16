import styled from '@emotion/styled';

import PanelComponent from 'components/Panel';
import { color, spacing } from 'constants/theme';

const Panel = styled(PanelComponent)({
  display: 'flex',
  flexDirection: 'column',
});

const ImageWrapper = styled.div({
  width: '100%',
  height: 'auto',
  backgroundColor: 'black',
  position: 'relative',
  zIndex: 0,
  '& > img': {
    objectFit: 'cover',
  },
  '&::after': {
    display: 'block',
    content: '""',
    paddingBottom: `${420 / 3.9}%`,
  },
});

const NoticeContainer = styled.div({
  width: 200,
  height: 100,
  background: color.white070,
  left: '50%',
  bottom: spacing[20],
  transform: 'translate(-100px, 0)',
  textAlign: 'center',
  position: 'absolute',
});

const BottomContainer = styled.section({
  display: 'flex',
  padding: `${spacing[12]}px ${spacing[20]}px ${spacing[20]}px`,
  gap: spacing[8],
  flex: '1 0 100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignSelf: 'stretch',
});

const NameContainer = styled.div({
  flex: '1 0 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  lineHeight: '30px',
  '.and': {
    color: color.gray,
    lineHeight: 'inherit',
  },
});

const LineBox = styled.div({
  margin: spacing[16],
  position: 'absolute',
  zIndex: 1,
  inset: 0,
  border: '1px solid #c5c5c5',
  width: 'calc(100% - 32px)',
  height: 'calc(100% - 32px)',
  background: 'transparent',
});

const Styled = {
  Panel,
  ImageWrapper,
  NoticeContainer,
  NameContainer,
  BottomContainer,
  LineBox,
};

export default Styled;
