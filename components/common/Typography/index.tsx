import { forwardRef, type ElementType, type ForwardedRef } from 'react';

import type { CSSInterpolation } from '@emotion/serialize';

import Styled from 'components/common/Typography/Styled';
import { defaultVariantMapping, type TypographyRootProps } from 'components/common/Typography/type';
import TypographyStyle from 'constants/foundation/typography';
import type { FCChildren } from 'types/common';
import { clsx } from 'utils/common';

type Parent = TypographyRootProps & { css?: CSSInterpolation };
interface TypographyProps extends Parent {
  paragraph?: boolean;
  as?: ElementType;
  className?: string;
}
const Typography: FCChildren<TypographyProps> = forwardRef(
  (
    {
      as,
      paragraph,
      className,
      css: propCss,
      children,
      color = 'text',
      variant = 'title20',
      align = 'inherit',
      noWrap = false,
      ...props
    },
    forwardedRef: ForwardedRef<HTMLElement>
  ) => {
    const classes = clsx([className]);
    const Component = as || (paragraph ? 'p' : defaultVariantMapping[variant]) || 'span';
    return (
      <Styled.Typography
        ref={forwardedRef}
        noWrap={noWrap}
        align={align}
        color={color}
        as={Component}
        className={classes}
        css={[TypographyStyle[variant], propCss]}
        {...props}
      >
        {children}
      </Styled.Typography>
    );
  }
);
Typography.displayName = 'Typography';

export default Typography;
