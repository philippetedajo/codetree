import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Playground } from "./pages";
import TreeEditor from "./Tree/TreeEditor";

import "./index.css";

const Index = () => {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/playground" component={Playground} />
            <Route path="/treeEditor" component={TreeEditor} />
          </Switch>
        </Router>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
