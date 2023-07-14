import styled from '@emotion/styled';

import Typography from 'components/common/Typography';
import PanelComponent from 'components/Panel';

const Panel = styled(PanelComponent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing[40] + theme.spacing[16],
  padding: '16px 16px 40px',
}));

const ContentContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing[60],
  alignSelf: 'stretch',
}));

const LineWrapper = styled.div({
  alignSelf: 'stretch',
  position: 'relative',
  '::after': {
    content: '""',
    display: 'block',
    marginBottom: `${600 / 179}%`,
  },
});

const FamilyContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing[40],
  alignSelf: 'stretch',
}));

const NameContainer = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
  ContentContainer,
  LineWrapper,
  FamilyContainer,
  NameContainer,
  ParentNames,
  HeroName,
};

export default Styled;
