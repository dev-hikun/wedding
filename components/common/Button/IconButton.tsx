import type { ComponentProps, FC } from 'react';

import Button from 'components/common/Button/Button';
import Styled from 'components/common/Button/Styled';
import type { IconButtonSizeType } from 'components/common/Button/type';

interface IconButtonProps extends ComponentProps<'button'> {
  size?: keyof IconButtonSizeType;
}
const IconButton: FC<IconButtonProps> = ({ children, size = 'md', ...props }) => {
  return (
    <Button size="xs" {...props}>
      <Styled.IconWrapper size={size}>{children}</Styled.IconWrapper>
    </Button>
  );
};

export default IconButton;
