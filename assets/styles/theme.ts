import { spacing, color } from 'constants/theme';
import type { Locale } from 'types/common';

const theme = {
  color,
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
