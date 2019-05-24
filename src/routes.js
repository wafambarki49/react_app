import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/component/posts";
import Comments from "./components/component/comments";

const RoutesApp = () => (
    <Router>
    <Switch>
      <Route path="/" exact component={Posts} />
      <Route path="/:id/comments" exact component={Comments} />
    </Switch>
  </Router>

);

export default RoutesApp;