// FIXME https://github.com/flolu/nextjs-bazel/issues/1
// import '../styles/globals.css'

import {AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
