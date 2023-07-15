import type { Theme } from '@emotion/react';
import type { Property } from 'csstype';

export const defaultVariantMapping = {
  pageTitle: 'p',
  introWe: 'p',
  introMarriage: 'span',
  introDo: 'span',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  inherit: 'p',
  title14: 'p',
  title18: 'p',
  title20: 'p',
} as const;

export type TypographyVariantType = keyof typeof defaultVariantMapping;

export interface TypographyRootProps {
  variant?: TypographyVariantType;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  noWrap?: boolean;
  color?: keyof Theme['color'];
  whiteSpace?: Property.WhiteSpace;
}
