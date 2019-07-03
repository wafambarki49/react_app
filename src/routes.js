import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Posts = React.lazy(() => import('./components/component/posts'));
const Comments = React.lazy(() => import('./components/component/comments'));

const RoutesApp = () => (
  <Router>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" exact component={Posts} />
        <Route path="/:id/comments" exact component={Comments} />
      </Suspense>
    </Switch>
  </Router>

);

export default RoutesApp;