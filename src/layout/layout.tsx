import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBTQZCR');`;
const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBTQZCR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      </Head>
      <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
