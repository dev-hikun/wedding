import type { FC } from 'react';

import { Html, Main, NextScript, Head } from 'next/document';

import { ja, ko } from 'assets/fonts/notoSerif';
import type { Locale } from 'types/common';
import { clsx } from 'utils/common';

const document: FC<Locale> = ({ locale }) => {
  return (
    <Html lang={locale}>
      <Head />
      <body className={clsx([ja.variable, ko.variable])}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default document;
