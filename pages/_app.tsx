import "../public/font/stylesheet.css";
import "../components/styles/iframeLoaderScreen.css";
import "../components/styles/loaders.css";
import "../components/styles/globals.css";
import "../components/styles/customlib/_customTabs.css";
import "../components/styles/customlib/_customMonacoEditor.css";
import "allotment/dist/style.css";

import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { SettingsModal } from "../components/ui/Modals";
import { TemplateModal } from "../components/ui/Modals/TemplateModal";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Provider store={store}>
        <Component {...pageProps} />

        <SettingsModal />
        <TemplateModal />
      </Provider>
    </>
  );
}
export default MyApp;
