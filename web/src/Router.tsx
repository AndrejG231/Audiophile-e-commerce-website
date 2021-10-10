import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";

export const routes = {
  home: "/",
  category: (category: string) => `/category/${category}/`,
  product: (product: string) => `/product/${product}/`,
};

const Router = () => {
  return (
    <BrowserRouter>
      <Route path={routes.home} exact component={() => <Home />} />
      <Route
        path={routes.category(":category")}
        exact
        component={() => <Category />}
      />
    </BrowserRouter>
  );
};

export default Router;
