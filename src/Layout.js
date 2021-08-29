import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/portfolio" component={Home} />
            <Route exact path="/portfolio/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
