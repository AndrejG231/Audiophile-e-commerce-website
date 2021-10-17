import React from "react";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../states/ScreenQuery";
import BestGear from "../components/footer/BestGear";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import SelectCategory from "../components/home_category_select";
import {
  ZX9ProductView,
  ZX7ProductView,
  YX1ProductView,
} from "../components/home_products";
import Navbar from "../components/navbar";
import { Spacer } from "../components/util";
import images from "../data/images";
import CategorySelection from "../components/home_category_select";

// Main
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <CategorySelection />
        <ZX9ProductView />
        <ZX7ProductView />
        <YX1ProductView />
      </main>
      <BestGear />
      <Footer />
    </>
  );
};

export default Home;
