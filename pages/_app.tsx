import "../public/font/stylesheet.css";
import "../styles/iframeLoaderScreen.css";
import "../styles/loaders.css";
import "../styles/globals.css";
import "../styles/customlib/_customTabs.css";
import "../styles/customlib/_customMonacoEditor.css";
import "allotment/dist/style.css";
import "nprogress/nprogress.css";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import App from "next/app";
import type { AppContext, AppProps } from "next/app";
import Script from "next/script";
import { getIronSession, IronSessionData } from "iron-session";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

import { createApolloClient } from "../utils/client";
import { sessionOptions } from "../utils/withSession";
import { store } from "../store/store";
import {
  OauthInput,
  OauthProvider,
  set_initial_user,
  withOauth,
} from "../store/features/authSlice";
import { RootModal } from "../components/Modals/RootModal";

interface MyAppProps extends AppProps {
  initialUser?: IronSessionData["user"] | null;
}

function MyApp({ Component, pageProps, router, initialUser }: MyAppProps) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  useEffect(() => {
    window.withOauth = function (input: OauthInput, provider: OauthProvider) {
      store.dispatch(withOauth(input, provider));
    };
  }, []);

  useEffect(() => {
    store.dispatch(set_initial_user(initialUser));
  }, [initialUser]);

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

      <ApolloProvider
        client={createApolloClient(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbDhtY2hwdzQwMDA4Z3l2cGRmbXY2d2V5IiwiaWF0IjoxNjY0NDEzMjAwfQ.HVBdNKoHppNZHN8EbwV0mhVfkbFt0odL58pHheZV7w0"
        )}
      >
        <Provider store={store}>
          <Component {...pageProps} />
          <RootModal />
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.req && appContext.ctx.res) {
    const session = await getIronSession(
      appContext.ctx.req,
      appContext.ctx.res,
      sessionOptions
    );

    return {
      ...appProps,
      initialUser: session.user,
    };
  }

  return appProps;
};
