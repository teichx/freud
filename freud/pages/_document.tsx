import { Head, Html, Main, NextScript } from 'next/document';

export const Document = () => (
  <Html lang='en'>
    <Head />
    <script src='https://accounts.google.com/gsi/client' async defer />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
