import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import QuickList from "./Components/QuickList";
import List from "./Components/List";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouterApp() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/QuickList" exact component={QuickList} />
          <Route path="/List" exact component={List} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterApp;
