import React from "react";
import { useHistory } from "react-router";
import { Subscribe } from "unstated";
import products from "../../data/products";
import Cart from "../../states/Cart";
import { BackHomeButton } from "./styles";
import {
  CheckedCircle,
  CheckIcon,
  GrandTotalContainer,
  GrandTotalTitle,
  GrandTotalNum,
  Item,
  ItemImage,
  ModalContainer,
  OrderInfo,
  SummaryContainer,
  ThankTitle,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductCount,
  Summary,
  OtherLine,
  OtherItems,
} from "./styles";
import { goHomeId } from "../../constants";

const CheckoutModal = () => {
  const nav = useHistory();
  return (
    <ModalContainer>
      <CheckedCircle>
        <CheckIcon />
      </CheckedCircle>
      <ThankTitle>
        Thank you
        <br />
        for your order
      </ThankTitle>
      <OrderInfo>You will receive an email confirmation shortly.</OrderInfo>
      <Subscribe to={[Cart]}>
        {(cart: Cart) => {
          const key = Object.keys(cart.state.cart)[0]; // First item in cart
          const other = Object.keys(cart.state.cart).length - 1;
          return (
            <SummaryContainer>
              <Summary>
                <Item>
                  <ItemImage src={products[key].cart} />
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
                  <ProductCount>x{cart.state.cart[key].quantity}</ProductCount>
                </Item>
                {other ? (
                  <>
                    <OtherLine />
                    <OtherItems>
                      and {other} other item{other == 1 ? "" : "s"}
                    </OtherItems>
                  </>
                ) : null}
              </Summary>
              <GrandTotalContainer>
                <GrandTotalTitle>Grand Total</GrandTotalTitle>
                <GrandTotalNum>
                  ${" "}
                  {cart
                    .getPrices()
                    .reduce(
                      (acc: number, val: { val: number }) => acc + val.val,
                      0
                    )
                    .toLocaleString("en-US")}
                </GrandTotalNum>
              </GrandTotalContainer>
            </SummaryContainer>
          );
        }}
      </Subscribe>
      <BackHomeButton id={goHomeId} onClick={() => nav.push("/")}>
        Back to home
      </BackHomeButton>
    </ModalContainer>
  );
};

export default CheckoutModal;
