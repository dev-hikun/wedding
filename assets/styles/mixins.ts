import { css } from '@emotion/react';

export const hiddenText = css`
  overflow: hidden;
  position: absolute;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
`;
