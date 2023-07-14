import type { CSSInterpolation } from '@emotion/serialize';

import type { TypographyVariantType } from 'components/common/Typography/type';

const TypographyStyle: Partial<Record<TypographyVariantType, CSSInterpolation>> = {
  pageTitle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: '80px',
  },
  introWe: {
    fontSize: 36,
    fontWeight: '500',
  },
  introMarriage: {
    fontSize: 28,
    fontWeight: '500',
  },
  introDo: {
    fontSize: 18,
    fontWeight: '500',
  },
  body1: {
    fontSize: 20,
    fontWeight: '500',
  },
  body2: {
    fontSize: 14,
    fontWeight: '500',
  },
} as const;

export default TypographyStyle;
