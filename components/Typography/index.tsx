import { forwardRef, type ElementType, type ForwardedRef } from 'react';

import Styled from 'components/Typography/Styled';
import { defaultVariantMapping, type TypographyRootProps } from 'components/Typography/type';
import type { FCChildren } from 'types/common';
import { clsx } from 'utils/common';

interface TypographyProps extends TypographyRootProps {
  paragraph?: boolean;
  as?: ElementType;
  className?: string;
}
const Typography: FCChildren<TypographyProps> = forwardRef(
  (
    { as, paragraph, className, children, variant = 'body1', align = 'inherit', noWrap = false, ...props },
    forwardedRef: ForwardedRef<HTMLElement>
  ) => {
    const classes = clsx([className]);
    const Component = as || (paragraph ? 'p' : defaultVariantMapping[variant]) || 'span';
    return (
      <Styled.Typography ref={forwardedRef} noWrap={noWrap} align={align} as={Component} className={classes} {...props}>
        {children}
      </Styled.Typography>
    );
  }
);
Typography.displayName = 'Typography';

export default Typography;
