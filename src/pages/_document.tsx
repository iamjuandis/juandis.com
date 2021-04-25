import React, { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from '../lib/gtag';

interface DocProps {
  isProduction?: any;
}
export default class MyDocument extends Document<DocProps> {
  static async getInitialProps(ctx: any) {
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            styledComponentsSheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        isProduction,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  /*eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-title" content="Juan David Pérez • Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Juan David Pérez • Portfolio" />
          <meta property="og:type" content="website" />
          <meta name="twitter:account_id" property="twitter:account_id" content="717185162" />
          <meta name="twitter:site" content="@iamjuandis" />
          <meta name="twitter:creator" content="@iamjuandis" />
          <link rel="stylesheet" href="https://use.typekit.net/lmz3qmg.css" />
          {isProduction && (
            <Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
