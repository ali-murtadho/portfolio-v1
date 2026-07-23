import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafbfd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Script id="theme-init" strategy="beforeInteractive">{`
        (function() {
          var t = localStorage.getItem('theme');
          if (t) { document.documentElement.setAttribute('data-theme', t); }
          else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        })();
      `}</Script>
      <Component {...pageProps} />
    </>
  )
}
