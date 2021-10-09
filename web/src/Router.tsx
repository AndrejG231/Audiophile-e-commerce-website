import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const routes = {
  home: "/",
  category: (category: string) => `/category/${category}/`,
};

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path={routes.home} exact component={() => <Home />} />
        <Route
          path={routes.category(":category")}
          exact
          component={() => <Home />}
        />
      </BrowserRouter>
    );
  }
}

export default Router;
