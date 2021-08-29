import "../styles/globals.css";
import "../styles/iframeLoaderScreen.css";
import "../styles/customlib/_customTabs.css";
import "../styles/customlib/_customReactSplit.css";
import "../styles/customlib/_customMonacoEditor.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import * as NextAuth from "next-auth/client";

import { store } from "../store/store";
import { DashboardLayout } from "../ui/layouts";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  const router = useRouter();

  return (
    <NextAuth.Provider session={pageProps.session}>
      <Provider store={store}>
        {router.pathname.startsWith("/dashboard") ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </NextAuth.Provider>
  );
}
export default MyApp;
