import type { Locale } from 'types/common';

const theme = {
  color: {
    text: '#333',
  },
  zIndex: {
    header: 1000,
  },
} as const;

const getTheme = ({ locale }: Locale) => ({
  ...theme,
  locale,
});

export type Theme = ReturnType<typeof getTheme>;

export default getTheme;
