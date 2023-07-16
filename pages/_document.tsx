import type { FC } from 'react';

import { Html, Main, NextScript, Head } from 'next/document';

import { ja, ko } from 'assets/fonts/notoSerif';
import type { Locale } from 'types/common';

const document: FC<Locale> = ({ locale }) => {
  return (
    <Html
      lang={locale}
      css={{
        '--noto-serif-ko': ko.style.fontFamily,
        '--noto-serif-jp': ja.style.fontFamily,
      }}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default document;
