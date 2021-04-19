import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TreeEditor from "./components/TreeEditor";
import { Home, Register, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TreeEditor} />
        {/*<Route path="/Playground" component={TreeEditor} />*/}
        {/*<Route path="/login" component={Login} />*/}
        {/*<Route path="/register" component={Register} />*/}
      </Switch>
    </Router>
  );
};

export default App;
