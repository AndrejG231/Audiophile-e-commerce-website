import React, { useMemo } from "react";
import Navbar from "../components/navbar";
import { useHistory, useParams } from "react-router";
import products from "../data/products";
import ProductMainContainer from "../components/product_main_container";
import ProductInBox from "../components/product_in_box";
import ProductFeatures from "../components/product_features";
import ProductGallery from "../components/product_gallery";

const resovleProduct = (productKey: string) => {
  return products.find((product) => {
    return product.slug === productKey;
  });
};

const Product = () => {
  const { product: productKey } = useParams<{ product: string }>();
  const product = useMemo(() => resovleProduct(productKey), []);

  //   Temporary no product found handling
  if (!product) {
    return <h1>Error: Could not find specified product.</h1>;
  }

  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Product;
