import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="72x72" href="icons/icon-72x72.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192x192.png" />
          <link rel="apple-touch-icon" href="icons/icon-192x192.png" />

          <meta name="description" content="Next.js with Bazel" />
          <meta name="theme-color" content="#4d9f4e" />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="theme light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
