import React, { FC } from "react";
import { Link } from "react-router-dom";

import {
  NewProductNotify,
  ProductContainer,
  ProductDesc,
  ProductImage,
  ProductName,
  SeeProductButton,
} from "./styles";

type CategoryProductProps = {
  img: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNew: boolean;
  name: string;
  desc: string;
  link: string;
};

const CategoryProductDisplay: FC<CategoryProductProps> = ({
  img,
  isNew,
  name,
  desc,
  link,
}) => {
  return (
    <ProductContainer>
      <ProductImage img={img} />
      {isNew ? <NewProductNotify>new product</NewProductNotify> : null}
      <ProductName>{name}</ProductName>
      <ProductDesc>{desc}</ProductDesc>
      <Link to={link}>
        <SeeProductButton>see product</SeeProductButton>
      </Link>
    </ProductContainer>
  );
};

export default CategoryProductDisplay;
