import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TreeEditor from "./components/TreeEditor";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TreeEditor} />
      </Switch>
    </Router>
  );
};

export default App;
