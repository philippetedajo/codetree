import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Playground } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";

const Index = () => {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/playground" component={Playground} />
          </Switch>
        </Router>
      </ChakraProvider>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
