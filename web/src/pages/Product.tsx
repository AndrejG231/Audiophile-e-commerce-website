import React, { useMemo } from "react";
import Navbar from "../components/navbar";
import { useHistory, useParams } from "react-router";
import products from "../data/products";
import ProductMainContainer from "../components/product_main_container";

const resovleProduct = (productKey: string) => {
  return products.find((product) => {
    return product.slug === productKey;
  });
};

const Product = () => {
  const { product: productKey } = useParams<{ product: string }>();
  const product = useMemo(() => resovleProduct(productKey), []);
  const nav = useHistory();

  //   Temporary no product found handling
  if (!product) {
    return <h1>Error: Could not find specified product.</h1>;
  }

  return (
    <>
      <Navbar />
      <ProductMainContainer
        name={product.name}
        description={product.description}
        img={product.image}
        isNew={product.new}
        price={product.price}
      />
    </>
  );
};

export default Product;
