import React from "react";
import { Subscribe } from "unstated";
import { ScreenQuery } from "..";
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

// Main
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Spacer height={32} />
        <SelectCategory
          category="headphones"
          image={images.categoryThumbnail.headphones}
        />
        <SelectCategory
          category="speakers"
          image={images.categoryThumbnail.speakers}
        />
        <SelectCategory
          category="earphones"
          image={images.categoryThumbnail.earphones}
        />
        <ZX9ProductView />
        <ZX7ProductView />
        <YX1ProductView />
        <BestGear />
        <Footer />
      </main>
    </>
  );
};

export default Home;
