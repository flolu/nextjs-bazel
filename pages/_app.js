/**
 * Importing `styles/globals.css` into `pages/_app.js` causes an error
 * Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).
 */
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
