import styled from '@emotion/styled';

import Typography from 'components/common/Typography';
import PanelComponent from 'components/Panel';
import { spacing } from 'constants/theme';

const Panel = styled(PanelComponent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: spacing[16],
  padding: spacing[16],
});

const TextWrapper = styled.div({
  alignSelf: 'stretch',
  flex: '1 0 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
});

const LineWrapper = styled.div({
  alignSelf: 'stretch',
  position: 'relative',
  '::after': {
    content: '""',
    display: 'block',
    marginBottom: `${550 / 179}%`,
  },
});

const FamilyContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[8],
  alignSelf: 'stretch',
  justifyContent: 'space-evenly',
  flex: '1 0 100%',
});

const NameContainer = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',
});

const ParentNames = styled(Typography)({
  width: 150,
  letterSpacing: -2,
  lineHeight: '36px',
});

const HeroName = styled(Typography)({
  width: 110,
});

const Styled = {
  Panel,
  TextWrapper,
  LineWrapper,
  FamilyContainer,
  NameContainer,
  ParentNames,
  HeroName,
};

export default Styled;
