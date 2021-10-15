import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../../states/ScreenQuery";

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
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => (
          <ProductImage src={img[query.state.mediaQuery]} />
        )}
      </Subscribe>
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
