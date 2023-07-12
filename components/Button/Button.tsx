import type { ComponentProps } from 'react';

import Styled from 'components/Button/Styled';
import type { FCChildren } from 'types/common';
import { clsx } from 'utils/common';

export interface ButtonProps extends ComponentProps<'button'> {
  size?: 'xs' | 'md';
}

const Button: FCChildren<ButtonProps> = ({ children, size = 'md', className, ...props }) => {
  const classes = clsx([size, className]);
  return (
    <Styled.Button className={classes} {...props}>
      {children}
    </Styled.Button>
  );
};
export default Button;
