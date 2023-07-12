import type { Theme } from '@emotion/react';

import type { Locale } from 'types/common';

const getTheme: (params: Locale) => Theme = ({ locale }) => ({
  color: {
    text: '#333',
  },
  zIndex: {
    header: 1000,
  },
  locale,
});

export default getTheme;
