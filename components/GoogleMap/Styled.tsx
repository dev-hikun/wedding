import styled from '@emotion/styled';

import { color } from 'constants/theme';
import type { Locale } from 'types/common';

const Styled = {
  MapWrapper: styled.div<Partial<Locale>>(() => ({
    width: '100%',
    position: 'relative',
    background: color.gray,

    '::before': {
      content: '""',
      paddingBottom: '80%',
      display: 'block',
      position: 'relative',
    },
  })),
};
export default Styled;
