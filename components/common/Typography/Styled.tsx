import styled from '@emotion/styled';

import type { TypographyRootProps } from 'components/common/Typography/type';
import { color } from 'constants/theme';

const Typography = styled.span<TypographyRootProps>(({ align, noWrap, color: propsColor, whiteSpace }) => ({
  color: color[propsColor],
  ...(align && {
    textAlign: align,
  }),
  ...(noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  whiteSpace,
}));

const Styled = {
  Typography,
};
export default Styled;
