import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          {/* Favicon and Icons */}
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" href="/static/favicon.ico" />

          {/* Theme Color */}
          <meta name="theme-color" content="#1a1a2e" />
          <meta name="msapplication-TileColor" content="#1a1a2e" />

          {/* Apple Mobile Web App */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Izumi Ishikawa" />

          {/* Format Detection */}
          <meta name="format-detection" content="telephone=no" />

          {/* Dark Reader Lock */}
          <meta name="darkreader-lock" />

          {/* Google Site Verification */}
          <meta
            name="google-site-verification"
            content="irKl6t8UwBedlCZJMmJqn1I-zplPtyIUsFqavOSRweQ"
          />

          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* DNS Prefetch */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
