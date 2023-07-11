import { Global, css } from '@emotion/react';

import { FONT_CSS_VAR } from 'assets/fonts/notoSerif';

const GlobalStyles = () => (
  <Global
    styles={({ locale }) => css`
      * {
        font-family: ${FONT_CSS_VAR[locale]};
      }

      html,
      body {
        margin: 0;
      }
    `}
  />
);
export default GlobalStyles;
