import type { FC } from 'react';

import { Html, Main, NextScript, Head } from 'next/document';
import Script from 'next/script';

import { ja, ko } from 'assets/fonts';
import type { Locale } from 'types/common';

const document: FC<Locale> = ({ locale }) => {
  return (
    <Html lang={locale}>
      <Head>
        <Script id="gtag" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-HV9ZMJHDB5">
          {
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HV9ZMJHDB5');"
          }
        </Script>
      </Head>
      <body className={[ja.variable, ko.variable].join(' ')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default document;
