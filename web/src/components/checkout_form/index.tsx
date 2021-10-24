import React from "react";
import { InputField } from "../inputs";
import { CheckoutTitle, Container, Fieldset, Legend } from "./styles";

const CheckoutForm = () => {
  return (
    <Container>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Fieldset>
          <Legend>Billing details</Legend>
          <InputField identifier="fullname" label="Name" />
        </Fieldset>
        <Fieldset>
          <Legend>Shipping info</Legend>
        </Fieldset>
        <Fieldset>
          <Legend>Payment details</Legend>
        </Fieldset>
      </form>
    </Container>
  );
};

export default CheckoutForm;
