import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Setup, Playground } from "./pages";
import "./index.css";

const Index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/setup" component={Setup} />
          <Route path="/playground" component={Playground} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
