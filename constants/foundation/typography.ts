import type { CSSInterpolation } from '@emotion/serialize';

import type { TypographyVariantType } from 'components/common/Typography/type';

const TypographyStyle: Partial<Record<TypographyVariantType, CSSInterpolation>> = {
  h1: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 'inherit',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 2.5,
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
  title20: {
    fontSize: 20,
    fontWeight: '500',
  },
  title14: {
    fontSize: 14,
    fontWeight: '500',
  },
  title18: {
    fontSize: 18,
    fontWieght: '500',
  },
  caption: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 1.2,
  },
  body1: {
    fontSize: 14,
    fontWeight: '400',
  },
  body2: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 2.5,
  },
  body3: {
    fotnSize: 18,
    fontWeight: '400',
    lineHeight: '40px',
  },
} as const;

export default TypographyStyle;
