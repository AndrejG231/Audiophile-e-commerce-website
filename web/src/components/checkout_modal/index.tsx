import React from "react";
import {
  CheckedCircle,
  CheckIcon,
  ModalContainer,
  OrderInfo,
  ThankTitle,
} from "./styles";

const CheckoutModal = () => {
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
    </ModalContainer>
  );
};

export default CheckoutModal;
