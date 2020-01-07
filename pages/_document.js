import React from "react";

import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>X2 Trẻ - Football-Moving Forward</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="X2 Trẻ" />
          <meta name="author" content="thienngoc.info" />

          <meta
            name="description"
            content={'X2 Trẻ - Tiền Lệ'}
          />
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, minimal-ui" />

          <link rel="stylesheet" href='/static/styles.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}