import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TreeEditor from "./Tree/TreeEditor";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";
import "./monaco-css.css";

const Index = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={TreeEditor} />
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
