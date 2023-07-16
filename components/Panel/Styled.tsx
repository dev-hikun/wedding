import styled from '@emotion/styled';
import Image from 'next/image';

const Panel = styled.section(({ theme }) => ({
  width: '100%',
  minHeight: 'max(calc(var(--vh, 1) * 100), 550px)',
  position: 'relative',
  backgroundColor: theme.color.white,
  '&>img': {
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
