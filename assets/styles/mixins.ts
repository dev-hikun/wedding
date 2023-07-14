import { css } from '@emotion/react';

export const hiddenText = css`
  overflow: hidden;
  position: absolute;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
`;

export const HideScrollbarStyle = css`
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent; /* Chrome/Safari/Webkit */
  }
`;
