import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script
            src="//cdn.kaizenplatform.net/s/57/835938a4542bdb.js?kz_namespace=kzs"
            data-kz-single-page-app="true"
            data-kz-namespace="kzs"
            data-kz-key="835938a4542bdb"
            charSet="utf-8"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
