import React, { FC } from "react";
import { useHistory } from "react-router";
import { Subscribe } from "unstated";
import { ProductCounts } from "../../states/ProductCounts";
import { ScreenQuery } from "../../states/ScreenQuery";
import Cart from "../../states/Cart";
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
  slug: string;
};

const ProductMainContainer: FC<props> = ({
  name,
  img,
  isNew,
  description,
  price,
  slug,
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
      <Subscribe to={[ProductCounts]}>
        {(counts: ProductCounts) => (
          <AddToCardContainer>
            <QuantitySelect>
              <QuantityChangeSymbol onClick={() => counts.decrement(slug)}>
                -
              </QuantityChangeSymbol>
              <QuantityNumber>{counts.state[slug]}</QuantityNumber>
              <QuantityChangeSymbol onClick={() => counts.increment(slug)}>
                +
              </QuantityChangeSymbol>
            </QuantitySelect>

            <Subscribe to={[Cart]}>
              {(cart: Cart) => (
                <AddToCartButton
                  onClick={() => {
                    cart.addItem(slug, counts.state[slug]);
                    counts.reset(slug);
                  }}
                >
                  Add To Cart
                </AddToCartButton>
              )}
            </Subscribe>
          </AddToCardContainer>
        )}
      </Subscribe>
    </Container>
  );
};

export default ProductMainContainer;
