import styled from '@emotion/styled';

import { IconButton } from 'components/common/Button';
import { color, spacing } from 'constants/theme';

const Container = styled.article({
  position: 'relative',
  alignSelf: 'stretch',
  display: 'flex',
});

const ImageWrapper = styled.div({
  flexBasis: '50px',
  width: 50,
  height: 50,
  minWidth: 50,
  minHeight: 50,
  borderRadius: 50,
  marginRight: spacing[16],
  overflow: 'hidden',
  position: 'relative',
});

const MessageContainer = styled.div({
  flex: '0 1 100%',
});

const Message = styled.div({
  position: 'relative',
  textAlign: 'justify',
  borderRadius: 5,
  backgroundColor: color.gray050,
  padding: spacing[16],
  whiteSpace: 'pre-line',

  '::after': {
    content: "''",
    position: 'absolute',
    top: 20,
    left: -15,
    borderTop: '5px solid transparent',
    borderLeft: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderRight: `10px solid ${color.gray050}`,
  },
});

const Icon = styled(IconButton)`
  &.xs {
    padding: ${spacing[4]}px;
  }
`;

export const Styled = {
  Container,
  ImageWrapper,
  MessageContainer,
  Message,
  Icon,
};
