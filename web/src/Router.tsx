import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { NavbarCover } from "./components/navbar/";
import ShoppingCart from "./components/shopping_cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ScrollTop from "./util/routerScrollTop";

const Container = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const routes = {
  home: "/",
  category: (category: string) => `/category/${category}`,
  product: (product: string) => `/product/${product}`,
  checkout: "/checkout/order",
  finishedOrder: "/checkout/finished",
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Container>
        <ShoppingCart />
        <NavbarCover />
        <Switch>
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
          <Route path={routes.checkout} exact component={() => <Checkout />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
