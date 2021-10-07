import React from "react";
import Header from "../components/header";
import SelectCategory from "../components/home_category_select";
import { ZX9ProductView } from "../components/home_products";
import Navbar from "../components/navbar";
import { Spacer } from "../components/util";
import images from "../data/images.json";

// Main
class Home extends React.Component {
  render() {
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
          <Spacer height={120} />
          <ZX9ProductView />
        </main>
      </>
    );
  }
}

export default Home;
