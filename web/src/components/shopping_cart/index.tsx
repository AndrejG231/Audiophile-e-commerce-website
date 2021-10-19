import React from "react";
import styled from "styled-components";
import { Subscribe } from "unstated";
import products from "../../data/products";
import Cart from "../../states/Cart";
import DisplayStates from "../../states/DisplayStates";
import { ScreenQuery } from "../../states/ScreenQuery";
import {
  QuantitySelect,
  QuantityChangeSymbol,
  QuantityNumber,
} from "../product_main_container/styles";

const CartContainer = styled.div<{ display: boolean }>`
  position: absolute;
  top: 122px;
  left: 24px;
  right: 24px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 32px 28px;
  z-index: 11;
  display: ${({ display }) => (display ? "block" : "none")};
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const CartTitle = styled.h2`
  ${({ theme }) => theme.fonts.h6};
  text-align: left;
  width: 50%;
  margin-bottom: 8px;
`;

const ClearAll = styled.span`
  ${({ theme }) => theme.fonts.body};
  text-align: right;
  margin-left: auto;
  cursor: pointer;
  white-space: pre;
  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const CartItemContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 64px auto 96px;
`;

const ProductImage = styled.img`
  width: 64px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
`;

const ProductInfo = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  margin-left: 16px;
`;

const ProductName = styled.span`
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-top: 7px;
`;

const ProductPrice = styled.span`
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.grayLine};
  font-size: 0.875rem;
  margin-bottom: 7px;
  letter-spacing: 0;
  font-weight: 700;
`;

const CountChanger = styled.div`
  height: 32px;
  width: 100%;
  margin: auto;
  background: ${({ theme }) => theme.colors.gray};
`;

const ShoppingCart = () => {
  return (
    <Subscribe to={[Cart, DisplayStates]}>
      {(cart: Cart, display: DisplayStates) => {
        const cartItems = Object.values(cart.state.cart).reduce(
          (acc: number, val: { quantity: number }) => {
            if (val.quantity > 0) {
              return acc + 1;
            }
            return acc;
          },
          0
        );
        return (
          <CartContainer display={display.state.shoppingCart}>
            <CartHeader>
              <CartTitle>Cart ({cartItems})</CartTitle>
              <ClearAll>Remove all</ClearAll>
            </CartHeader>
            {Object.entries(cart.state.cart).map(
              ([key, value]: [string, { quantity: number }], index) => (
                <CartItemContainer key={index}>
                  <Subscribe to={[ScreenQuery]}>
                    {(query: ScreenQuery) => (
                      <ProductImage
                        src={products[key].image[query.state.mediaQuery]}
                      />
                    )}
                  </Subscribe>
                  <ProductInfo>
                    <ProductName>
                      {products[key].name
                        .replace(/(headphones|speaker|earphones)/gi, "")
                        .replace(/(mark)/gi, "mk")}
                    </ProductName>
                    <ProductPrice>
                      ${products[key].price.toLocaleString("en-US")}
                    </ProductPrice>
                  </ProductInfo>
                  <CountChanger></CountChanger>
                </CartItemContainer>
              )
            )}
          </CartContainer>
        );
      }}
    </Subscribe>
  );
};

export default ShoppingCart;
