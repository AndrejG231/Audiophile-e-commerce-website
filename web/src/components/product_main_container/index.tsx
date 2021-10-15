import React, { FC } from "react";
import { useHistory } from "react-router";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../../states/ScreenQuery";
import { ResponsiveImg } from "../../types/props";
import {
  AddToCardContainer,
  AddToCartButton,
  BackButton,
  Container,
  Description,
  Image,
  Name,
  NewProduct,
  Price,
  QuantityChangeSymbol,
  QuantityNumber,
  QuantitySelect,
} from "./styles";

type props = {
  name: string;
  img: ResponsiveImg;
  isNew: boolean;
  description: string;
  price: number;
};

const ProductMainContainer: FC<props> = ({
  name,
  img,
  isNew,
  description,
  price,
}) => {
  const nav = useHistory();

  return (
    <Container>
      <BackButton onClick={() => nav.goBack()}>Go back</BackButton>
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => <Image src={img[query.state.mediaQuery]} />}
      </Subscribe>
      {isNew ? <NewProduct>New product</NewProduct> : null}
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Price>$ {price.toLocaleString("en-US")}</Price>
      <AddToCardContainer>
        <QuantitySelect>
          <QuantityChangeSymbol>-</QuantityChangeSymbol>
          <QuantityNumber>20</QuantityNumber>
          <QuantityChangeSymbol>+</QuantityChangeSymbol>
        </QuantitySelect>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </AddToCardContainer>
    </Container>
  );
};

export default ProductMainContainer;
