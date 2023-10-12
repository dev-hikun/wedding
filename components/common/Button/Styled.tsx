import styled from '@emotion/styled';

import { IconButtonSize, type IconButtonSizeType } from 'components/common/Button/type';
import { color, spacing } from 'constants/theme';

const Button = styled.button({
  background: 'none',
  borderRadius: 4,
  border: `1px solid ${color.gray100}`,

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&.xs': {
    fontSize: 12,
    padding: 0,
    margin: 0,
    border: 0,
  },

  '&.md': {
    fontSize: 12,
    padding: `${spacing[4]}px ${spacing[8]}px`,
    backgroundColor: color.gray050,
    borderRadius: 2,

    ':hover': {
      backgroundColor: color.gray100,
    },
    ':active': {
      backgroundColor: color.gray200,
    },
  },
});

const IconWrapper = styled('span', {
  shouldForwardProp: (propName) => propName !== 'size',
})<{ size: keyof IconButtonSizeType }>(({ size }) => ({
  display: 'flex',
  lineHeight: `${IconButtonSize[size]}px`,
  fontSize: IconButtonSize[size],
  '&:not(:disabled)': {
    cursor: 'pointer',
  },
}));

const Styled = {
  Button,
  IconWrapper,
};
export default Styled;
