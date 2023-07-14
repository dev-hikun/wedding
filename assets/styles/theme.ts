import { spacing } from 'constants/theme';
import type { Locale } from 'types/common';

const theme = {
  color: {
    white010: '#ffffff10',
    white070: '#ffffffB3',
    white040: '#ffffff66',
    white: '#ffffff',
    text: '#333',
    gray: '#999',
    gray100: '#e2e2e2',
  },
  zIndex: {
    loading: 5000,
    header: 1000,
  },
  spacing,
} as const;

const getTheme = ({ locale }: Locale) => ({
  ...theme,
  locale,
});

export type Theme = ReturnType<typeof getTheme>;

export default getTheme;
