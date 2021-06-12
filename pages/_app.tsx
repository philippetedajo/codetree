import "../styles/global.css";
import "../styles/editor-global.css";
import "../styles/monaco-css.css";
import "../styles/editorLoader.css";
import "../styles/tabs.css";
import "../styles/resizer.css";
import "../node_modules/react-toastify/scss/main.scss";
import "nprogress/nprogress.css";
import "../styles/others.scss";
import "../styles/site-global.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import NProgress from "nprogress";
import { ThemeProvider } from "next-themes";
import { StandardLayout, AuthLayout } from "../components/layouts";
import { ToastContainer } from "react-toastify";
import React from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });
  //Binding events.
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <Provider store={store}>
      <Head>
        <title>Codetree</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider attribute="class">
        {router.pathname.startsWith("/auth") ? (
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        ) : router.pathname !== "/playground/[]" ? (
          <StandardLayout>
            <ToastContainer hideProgressBar={true} autoClose={8000} />
            <Component {...pageProps} />
          </StandardLayout>
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
