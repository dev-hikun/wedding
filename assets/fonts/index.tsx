import { Noto_Serif_KR, Noto_Serif_JP } from '@next/font/google';

export const FONT_CSS_VAR = {
  ko: 'var(--noto-serif-ko)',
  ja: 'var(--noto-serif-ja)',
} as const;

export const ko = Noto_Serif_KR({
  weight: ['400', '500', '700'],
  variable: '--noto-serif-ko',
  style: 'normal',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export const ja = Noto_Serif_JP({
  weight: ['400', '500', '700'],
  variable: '--noto-serif-ja',
  style: 'normal',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
