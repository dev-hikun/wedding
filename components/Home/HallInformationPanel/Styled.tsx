import styled from '@emotion/styled';

import IconButton from 'components/common/Button/IconButton';
import PanelComponent from 'components/Panel';
import { color, spacing } from 'constants/theme';

const Panel = styled(PanelComponent)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: color.gray050,
  gap: spacing[16],
  padding: spacing[16],
});

const MapWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignSelf: 'stretch',
  flex: '0 0 100%',
  alignItems: 'center',
});

const MapButton = styled(IconButton)({
  borderRadius: 5,
  margin: `0 ${spacing[16]}px`,
  width: 48,
  height: 48,
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  display: 'flex',
  transitionProperty: 'transform, box-shadow',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-in-out',
  position: 'relative',
  ':hover': {
    transform: 'translate(0, -4px)',
    boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
  },
});

const TransportationContainer = styled.div({
  display: 'flex',
  alignSelf: 'stretch',
  flexDirection: 'column',
  padding: `0 ${spacing[16]}px`,
  justifyContent: 'space-between',
  gap: spacing[8],
  flex: '1 0 100%',
});

const Styled = {
  Panel,
  MapWrapper,
  MapButton: MapButton.withComponent('a'),
  TransportationContainer,
};
export default Styled;
