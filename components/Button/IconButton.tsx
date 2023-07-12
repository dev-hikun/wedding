import type { ComponentProps, FC } from 'react';

import Button from 'components/Button/Button';
import Styled from 'components/Button/Styled';
import type { IconButtonSizeType } from 'components/Button/type';

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
