import type { Theme } from '@emotion/react';
import type { Property } from 'csstype';

export const defaultVariantMapping = {
  pageTitle: 'p',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  introWe: 'p',
  introMarriage: 'span',
  introDo: 'span',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  inherit: 'p',
} as const;

export type TypographyVariantType = keyof typeof defaultVariantMapping;

export interface TypographyRootProps {
  variant?: TypographyVariantType;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  noWrap?: boolean;
  color?: keyof Theme['color'];
  whiteSpace?: Property.WhiteSpace;
}
