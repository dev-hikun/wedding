import { Global, css } from '@emotion/react';

import { FONT_CSS_VAR } from 'assets/fonts/notoSerif';

const GlobalStyles = () => (
  <Global
    styles={({ locale }) => css`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        font-size: 14px;
        font-family: ${FONT_CSS_VAR[locale]};
        line-height: 1.5;
      }

      html,
      body,
      section,
      a,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      span {
        font-family: ${FONT_CSS_VAR[locale]};
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      h1,
      h2,
      p,
      ul {
        margin: 0;
      }

      ul {
        padding: 0;
        list-style: none;
      }

      button {
        padding: 0.5rem 1rem;
        font-weight: bold;
      }
    `}
  />
);
export default GlobalStyles;
