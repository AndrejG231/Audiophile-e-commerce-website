import React from "react";
import Header from "../components/header";
import SelectCategory from "../components/home_category_select";
import { Spacer } from "../components/util";
import images from "../data/images.json";

// Main
class Home extends React.Component {
  render() {
    return (
      <>
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
        </main>
      </>
    );
  }
}

export default Home;
