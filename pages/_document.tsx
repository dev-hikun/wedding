import type { FC } from 'react';

import { Html, Main, NextScript, Head } from 'next/document';

import { variable } from 'assets/fonts';
import type { Locale } from 'types/common';

const document: FC<Locale> = ({ locale }) => (
  <Html lang={locale}>
    <Head />
    <body className={variable[locale]}>
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default document;
