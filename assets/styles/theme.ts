import { spacing, color } from 'constants/theme';

const theme = {
  color,
  zIndex: {
    loading: 5000,
    header: 1000,
  },
  spacing,
} as const;

export type Theme = typeof theme;

export default theme;
