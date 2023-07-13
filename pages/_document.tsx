import { Html, Main, Head, NextScript, type DocumentProps } from 'next/document';

import { variable } from 'assets/fonts';

const Document = ({ locale }: DocumentProps) => {
  return (
    <Html lang={locale}>
      <Head />
      <body className={variable[locale]}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
