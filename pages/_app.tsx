import "../styles/globals.css";
import "../public/font/stylesheet.css";
import "../styles/iframeLoaderScreen.css";
import "../styles/loaders.css";
import "../styles/customlib/_customTabs.css";
import "../styles/customlib/_customMonacoEditor.css";
import "allotment/dist/style.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
