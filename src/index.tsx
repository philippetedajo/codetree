import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import ReactGA from "react-ga";
import { store } from "./store/store";
import "./styles/monaco-css.css";
import "./styles/global.css ";

Sentry.init({
  dsn:
    "https://f0761f756e68445fad68af833675ce0e@o576905.ingest.sentry.io/5731044",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactGA.initialize("UA-193712913-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
