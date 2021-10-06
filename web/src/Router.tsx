import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={() => <Home />} />
      </BrowserRouter>
    );
  }
}

export default Router;
