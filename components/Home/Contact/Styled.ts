import styled from '@emotion/styled';

import { spacing } from 'constants/theme';

const Panel = styled.section({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'initial !important',
  gap: spacing[16],
  padding: spacing[16],
});

const Styled = {
  Panel,
};
export default Styled;
