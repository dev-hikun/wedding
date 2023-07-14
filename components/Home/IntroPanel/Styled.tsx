import styled from '@emotion/styled';

import PanelComponent from 'components/Panel';

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
  flex: '1 0 100%',
  img: {
    objectFit: 'cover',
  },
  '&::after': {
    display: 'block',
    content: '""',
    paddingBottom: `${580 / 3.9}%`,
  },
});

const NoticeContainer = styled.div(({ theme }) => ({
  width: 200,
  height: 100,
  background: theme.color.white070,
  left: '50%',
  bottom: theme.spacing[20],
  transform: 'translate(-100px, 0)',
  textAlign: 'center',
  position: 'absolute',
}));

const BottomContainer = styled.section({
  display: 'flex',
  padding: '44px 32px',
  flex: '1 0 100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignSelf: 'stretch',
});

const NameContainer = styled.div(({ theme }) => ({
  textAlign: 'center',
  lineHeight: '30px',
  '.and': {
    color: theme.color.gray,
    lineHeight: 'inherit',
  },
}));

const LineBox = styled.div({
  margin: 16,
  position: 'absolute',
  zIndex: 1,
  inset: 0,
  border: '1px solid #c5c5c5',
  width: 'max(calc(100% - 32px), 328px)',
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
