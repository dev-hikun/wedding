import type { Theme } from '@emotion/react';
import type { Property } from 'csstype';

export const defaultVariantMapping = {
  h1: 'h1',
  pageTitle: 'p',
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
  title14: 'p',
  title16: 'p',
  title18: 'p',
  title20: 'p',
  caption: 'p',
  writter: 'p',
  datetime: 'p',
} as const;

export type TypographyVariantType = keyof typeof defaultVariantMapping;

export interface TypographyRootProps {
  variant?: TypographyVariantType;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  noWrap?: boolean;
  color?: keyof Theme['color'];
  whiteSpace?: Property.WhiteSpace;
}
