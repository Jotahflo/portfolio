import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portafolio-jf">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
