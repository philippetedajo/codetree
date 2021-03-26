import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Setup, Playground, Test } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";

const Index = () => {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/setup" component={Setup} />
            <Route path="/test" component={Test} />
            <Route exact path="/" component={Playground} />
          </Switch>
        </Router>
      </ChakraProvider>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
