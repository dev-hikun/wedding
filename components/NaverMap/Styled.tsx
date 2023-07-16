import styled from '@emotion/styled';

import { FONT_CSS_VAR } from 'assets/fonts';
import { color, spacing } from 'constants/theme';
import type { Locale } from 'types/common';

const Styled = {
  MapWrapper: styled.div<Partial<Locale>>(({ locale = 'ko' }) => ({
    width: '100%',
    position: 'relative',
    background: color.gray,
    '::before': {
      content: '""',
      paddingBottom: '80%',
      display: 'block',
      position: 'relative',
    },

    '.marker-text': {
      padding: spacing[8],
      fontFamily: FONT_CSS_VAR[locale],
      color: color.text,
      b: { fontSize: 14 },
      p: { fontSize: 12, '+p': { fontSize: 10 } },
    },
  })),
};

export default Styled;
