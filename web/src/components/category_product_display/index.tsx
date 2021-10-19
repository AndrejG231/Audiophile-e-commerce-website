import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Subscribe } from "unstated";
import { routes } from "../../Router";
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
  const nav = useHistory();
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
      <SeeProductButton onClick={() => nav.push(link)}>
        see product
      </SeeProductButton>
    </ProductContainer>
  );
};

export default CategoryProductDisplay;
