import React from "react";
import { Subscribe } from "unstated";
import products from "../../data/products";
import ShoppingCart from "../../states/Cart";
import { ScreenQuery } from "../../states/ScreenQuery";
import {
  Container,
  Item,
  ItemList,
  ItemImage,
  SummaryTitle,
  ProductName,
  ProductInfo,
  ProductPrice,
  ProductCount,
  Prices,
  PriceLine,
  PriceName,
  PriceNum,
  GrandTotal,
} from "./styles";

const CheckoutSummary = () => {
  return (
    <Subscribe to={[ShoppingCart]}>
      {(cart: ShoppingCart) => {
        const prices = cart.getPrices();
        return (
          <Container>
            <SummaryTitle>Summary</SummaryTitle>
            <ItemList>
              {Object.entries(cart.state.cart).map(
                ([key, value]: [string, { quantity: number }], index) =>
                  value.quantity ? (
                    <Item key={index}>
                      <Subscribe to={[ScreenQuery]}>
                        {(query: ScreenQuery) => (
                          <ItemImage
                            src={products[key].image[query.state.mediaQuery]}
                          />
                        )}
                      </Subscribe>
                      <ProductInfo>
                        <ProductName>
                          {products[key].name
                            .replace(
                              /(headphones|speaker|earphones|wireless)/gi,
                              ""
                            )
                            .replace(/(mark)/gi, "mk")}
                        </ProductName>
                        <ProductPrice>
                          ${products[key].price.toLocaleString("en-US")}
                        </ProductPrice>
                      </ProductInfo>
                      <ProductCount>x{value.quantity}</ProductCount>
                    </Item>
                  ) : null
              )}
            </ItemList>
            <Prices>
              {prices.map(({ key, val }) => (
                <PriceLine>
                  <PriceName>{key}</PriceName>
                  <PriceNum>$ {val.toLocaleString("en-US")}</PriceNum>
                </PriceLine>
              ))}
            </Prices>
            <GrandTotal>
              <PriceName>Grand Total</PriceName>
              <PriceNum grand>
                ${" "}
                {prices.reduce(
                  (acc: number, val: { val: number }) => acc + val.val,
                  0
                )}
              </PriceNum>
            </GrandTotal>
          </Container>
        );
      }}
    </Subscribe>
  );
};

export default CheckoutSummary;
