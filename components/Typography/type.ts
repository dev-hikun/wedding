export const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p',
} as const;

export interface TypographyRootProps {
  variant?: (typeof defaultVariantMapping)[keyof typeof defaultVariantMapping];
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  noWrap?: boolean;
}
