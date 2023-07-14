import styled from '@emotion/styled';
import Image from 'next/image';

const Panel = styled.section(({ theme }) => ({
  width: '100%',
  height: 'max(calc(var(--vh, 1vh) * 100), 640px)',
  position: 'relative',
  backgroundColor: theme.color.white,
  img: {
    objectFit: 'cover',
  },
}));

const Background = styled(Image)({
  zIndex: 0,
});

const Styled = {
  Panel,
  Background,
};
export default Styled;
