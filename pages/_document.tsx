import type { FC } from 'react';

import { Html, Main, NextScript, Head } from 'next/document';

import { ja, ko } from 'assets/fonts';
import type { Locale } from 'types/common';

const document: FC<Locale> = ({ locale }) => {
  return (
    <Html lang={locale}>
      <Head />
      <body className={[ja.variable, ko.variable].join(' ')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default document;
