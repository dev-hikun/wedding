import { Global, css } from '@emotion/react';
import { useRouter } from 'next/router';

import { FONT_CSS_VAR } from 'assets/fonts';
import { HideScrollbarStyle } from 'assets/styles/mixins';
import { color } from 'constants/theme';

const GlobalStyles = () => {
  const { locale } = useRouter();
  return (
    <Global
      styles={() => css`
        * {
          box-sizing: border-box;
        }

        html {
          ${HideScrollbarStyle}
        }

        html,
        body,
        #__next {
          margin: 0;
          font-size: 14px;
          font-family: ${FONT_CSS_VAR[locale]};
          line-height: 1.5;
          height: 100%;
          min-height: 550px;
          background-color: ${color.white};
        }

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

        body.loading {
          overflow: hidden;
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
};
export default GlobalStyles;
