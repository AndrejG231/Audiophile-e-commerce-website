import React from "react";
import BestGear from "../components/footer/BestGear";
import ShopSum from "../components/footer/ShopSum";
import Header from "../components/header";
import {
  ZX9ProductView,
  ZX7ProductView,
  YX1ProductView,
} from "../components/home_products";
import Navbar from "../components/navbar";
import CategorySelection from "../components/home_category_select";

// Main
const Home = () => {
  return (
    <>
      <Navbar transparent />
      <Header />
      <main>
        <CategorySelection />
        <ZX9ProductView />
        <ZX7ProductView />
        <YX1ProductView />
      </main>
      <BestGear />
      <ShopSum />
    </>
  );
};

export default Home;
