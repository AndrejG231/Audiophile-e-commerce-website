import React from "react";
import { Subscribe } from "unstated";
import products from "../../data/products";
import { routes } from "../../Router";
import Cart from "../../states/Cart";
import DisplayStates from "../../states/DisplayStates";
import { useHistory } from "react-router";
import { ScreenQuery } from "../../states/ScreenQuery";
import {
  CartContainer,
  CartHeader,
  CartItemContainer,
  CartSum,
  CartTitle,
  CartTotal,
  CartTotalText,
  CheckoutButton,
  ClearAll,
  CountChanger,
  ProductCount,
  ProductImage,
  ProductIncreaseButton,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./styles";

const ShoppingCart = () => {
  const nav = useHistory();

  return (
    <Subscribe to={[Cart, DisplayStates]}>
      {(cart: Cart, display: DisplayStates) => {
        const cartValues = { items: 0, total: 0 };

        Object.entries(cart.state.cart).forEach(
          ([key, value]: [string, { quantity: number }]) => {
            if (value.quantity > 0) {
              cartValues.total =
                cartValues.total + products[key].price * value.quantity;
              cartValues.items = cartValues.items + 1;
            }
          }
        );

        return (
          <CartContainer isDisplayed={display.state.shoppingCart}>
            <CartHeader>
              <CartTitle>Cart ({cartValues.items})</CartTitle>
              <ClearAll onClick={cart.removeAll}>Remove all</ClearAll>
            </CartHeader>
            {Object.entries(cart.state.cart).map(
              ([key, value]: [string, { quantity: number }], index) =>
                value.quantity ? (
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
                    <CountChanger>
                      <ProductIncreaseButton
                        left
                        onClick={() => cart.decreaseQuantity(key)}
                      >
                        -
                      </ProductIncreaseButton>
                      <ProductCount>
                        {cart.state.cart[key].quantity}
                      </ProductCount>
                      <ProductIncreaseButton
                        onClick={() => cart.increaseQuantity(key)}
                      >
                        +
                      </ProductIncreaseButton>
                    </CountChanger>
                  </CartItemContainer>
                ) : null
            )}
            <CartTotal>
              <CartTotalText>Total</CartTotalText>
              <CartSum>${cartValues.total.toLocaleString("US-en")}</CartSum>
            </CartTotal>
            <CheckoutButton
              onClick={() => {
                display.closeAll();
                nav.push(routes.checkout);
              }}
            >
              Checkout
            </CheckoutButton>
          </CartContainer>
        );
      }}
    </Subscribe>
  );
};

export default ShoppingCart;
