import { Head, Html, Main, NextScript } from 'next/document';

export const Document = () => (
  <Html lang='en'>
    <Head />
    <script src='https://accounts.google.com/gsi/client' async defer />

    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@600&display=swap'
      rel='stylesheet'
    />

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
