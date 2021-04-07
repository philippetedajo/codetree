import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import TreeEditor from "./components/TreeEditor";
import { store } from "./store/store";

import "./index.css";
import "./monaco-css.css";

ReactGA.initialize("UA-193712913-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const Index = () => {
  const matches = useMediaQuery("only screen and (min-width: 450px)");

  return (
    <div>
      {matches ? (
        <Provider store={store}>
          <ChakraProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={TreeEditor} />
              </Switch>
            </Router>
          </ChakraProvider>
        </Provider>
      ) : (
        <div className="bg-editor_primary text-white h-screen flex items-center justify-center text-center font-semibold">
          <div>
            The application is not yet supported on mobile, please open {" "}
            <span className="text-green-500"> CodeTree</span> on a computer
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
