import React, { useMemo } from "react";
import Navbar from "../components/navbar";
import { useHistory, useParams } from "react-router";
import products from "../data/products";
import ProductMainContainer from "../components/product_main_container";
import ProductInBox from "../components/product_in_box";
import ProductFeatures from "../components/product_features";
import ProductGallery from "../components/product_gallery";
import { CommonProductsTitle } from "../components/product_common/styles";
import ProductCommon from "../components/product_common";
import SelectCategory from "../components/home_category_select";
import CategorySelection from "../components/home_category_select";
import BestGear from "../components/footer/BestGear";
import ShopSum from "../components/footer/ShopSum";

const Product = () => {
  const { product: productKey } = useParams<{ product: string }>();
  const product = products[productKey];

  //   Temporary no product found handling
  if (!product) {
    return <h1>Error: Could not find specified product.</h1>;
  }

  return (
    <>
      <Navbar />
      <main>
        <ProductMainContainer
          slug={product.slug}
          name={product.name}
          description={product.description}
          img={product.image}
          isNew={product.new}
          price={product.price}
        />
        <ProductFeatures features={product.features} />
        <ProductInBox contents={product.includes} />
        <ProductGallery images={product.gallery} />
      </main>
      <CommonProductsTitle>You may also like</CommonProductsTitle>
      {product.others.map((other, index) => (
        <ProductCommon
          key={index}
          image={other.image}
          name={other.name}
          slug={other.slug}
        ></ProductCommon>
      ))}
      <CategorySelection lower />
      <BestGear />
      <ShopSum />
    </>
  );
};

export default Product;
