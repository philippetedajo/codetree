import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import { store } from "./store/store";
import "./styles/monaco-css.css";
import "./styles/global.css";
import App from "./App";

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
