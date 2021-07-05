import "../styles/globals.css";
import "../styles/iframeLoaderScreen.css";
import "../styles/customlib/_customTabs.css";
import "../styles/customlib/_customReactSplit.css";
import "../styles/customlib/_customMonacoEditor.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
