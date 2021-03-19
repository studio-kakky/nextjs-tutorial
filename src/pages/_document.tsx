import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBTQZCR');`;
const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBTQZCR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
