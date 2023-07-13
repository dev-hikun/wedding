import styled from '@emotion/styled';

import { IconButtonSize, type IconButtonSizeType } from 'components/Button/type';

const Button = styled.button({
  background: 'none',

  '&.xs': {
    fontSize: 12,
    padding: 0,
    margin: 0,
    border: 0,
  },
});

const IconWrapper = styled('span', {
  shouldForwardProp: (propName) => propName !== 'size',
})<{ size: keyof IconButtonSizeType }>(({ size }) => ({
  display: 'flex',
  lineHeight: `${IconButtonSize[size]}px`,
  fontSize: IconButtonSize[size],
  svg: {
    width: IconButtonSize[size],
    height: IconButtonSize[size],
  },
  '&:not(:disabled)': {
    cursor: 'pointer',
  },
}));

const Styled = {
  Button,
  IconWrapper,
};
export default Styled;
