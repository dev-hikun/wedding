import styled from '@emotion/styled';

import { FONT_CSS_VAR } from 'assets/fonts/notoSerif';
import type { TypographyRootProps } from 'components/common/Typography/type';

const Typography = styled.span<TypographyRootProps>(({ theme, align, noWrap }) => ({
  color: theme.color.text,
  ...(align && {
    textAlign: align,
  }),
  ...(noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  fontFamily: FONT_CSS_VAR[theme.locale],
}));

const Styled = {
  Typography,
};
export default Styled;
