import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getInitColorSchemeScript } from '@mui/material/styles';

/**
 * Make sure no SSR flash for color scheme - as we use system on startup
 * enable Adobe PDF viewer
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {getInitColorSchemeScript({ defaultMode: 'system' })}
          <Main />
          <NextScript />
        </body>
        <script src="https://documentservices.adobe.com/view-sdk/viewer.js" async />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Html>
    );
  }
}
