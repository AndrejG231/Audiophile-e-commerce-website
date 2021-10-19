import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { NavbarCover } from "./components/navbar/";
import ShoppingCart from "./components/shopping_cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const routes = {
  home: "/",
  category: (category: string) => `/category/${category}`,
  product: (product: string) => `/product/${product}`,
};

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <ShoppingCart />
        <NavbarCover />
        <Route path={routes.home} exact component={() => <Home />} />
        <Route
          path={`${routes.category(":category")}`}
          exact
          component={() => <Category />}
        />
        <Route
          path={`${routes.product(":product")}`}
          exact
          component={() => <Product />}
        />
      </Container>
    </BrowserRouter>
  );
};

export default Router;
