import styled from '@emotion/styled';
import Image from 'next/image';

import { color } from 'constants/theme';

const Panel = styled.section({
  width: '100%',
  minHeight: 'max(calc(var(--vh, 1) * 100), 667px)',
  position: 'relative',
  backgroundColor: color.white,
  '&>img': {
    objectFit: 'cover',
  },
});

const Background = styled(Image)({
  zIndex: 0,
  opacity: 0.4,
});

const Styled = {
  Panel,
  Background,
};
export default Styled;
