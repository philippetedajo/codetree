import "../styles/editor-global.css";
import "../styles/monaco-css.css";
import "../styles/editorLoader.css";
import "../styles/tabs.css";

import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Codetree</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
