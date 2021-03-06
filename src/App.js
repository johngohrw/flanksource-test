import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import TeamDetails from "./pages/TeamDetails";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:name">
          <TeamDetails />
        </Route>
      </Switch>
    </Router>
  );
}
