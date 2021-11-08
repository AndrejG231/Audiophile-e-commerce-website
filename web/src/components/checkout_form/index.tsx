import React from "react";
import { InputField } from "../inputs";
import {
  CheckoutTitle,
  Container,
  Fieldset,
  InputLabel,
  Legend,
} from "./styles";

const CheckoutForm = React.memo(
  ({ word }: any) => {
    console.log("Render");
    return (
      <Container>
        <CheckoutTitle>Checkout</CheckoutTitle>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Fieldset>
            {word}
            <Legend>Billing details</Legend>
            <InputField identifier="fullname" label="Name" />
            <InputField identifier="email" label="Email Address" />
            <InputField identifier="phone" label="Phone Number" />
          </Fieldset>
          <Fieldset>
            <Legend>Shipping info</Legend>
            <InputField identifier="address" label="Your Address" />
            <InputField identifier="zip" label="ZIP Code" />
            <InputField identifier="city" label="City" />
            <InputField identifier="country" label="Country" />
          </Fieldset>
          <Fieldset>
            <InputLabel htmlFor="paymethod">Payment Method</InputLabel>
            <Legend>Payment details</Legend>
            <InputField identifier="emoney" label="e-Money Number" />
            <InputField
              identifier="emoney-pin"
              label="e-Money PIN"
              type="password"
            />
          </Fieldset>
        </form>
      </Container>
    );
  },
  (props, nextProps) => {
    return nextProps.word % 2 ? true : false;
  }
);

export default CheckoutForm;
