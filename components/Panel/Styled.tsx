import styled from '@emotion/styled';
import Image from 'next/image';

const Panel = styled.section(({ theme }) => ({
  width: '100%',
  height: 'calc(var(--vh, 1) * 100)',
  maxHeight: '100%',
  minHeight: 640,
  position: 'relative',
  backgroundColor: theme.color.white,
  img: {
    objectFit: 'cover',
  },
}));

const Background = styled(Image)({
  zIndex: 0,
  opacity: 0.4,
});

const Styled = {
  Panel,
  Background,
};
export default Styled;
