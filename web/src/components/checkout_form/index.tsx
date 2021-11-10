import React from "react";
import { Subscribe } from "unstated";
import Checkout from "../../states/Checkout";
import { checkoutId } from "../../constants";
import { InputField, SelectField } from "../inputs";
import {
  CheckoutTitle,
  Container,
  Fieldset,
  InputLabel,
  Legend,
} from "./styles";

const CheckoutForm = () => {
  return (
    <Container>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <form
        id={checkoutId}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Fieldset>
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
          <Legend>Payment details</Legend>
          <InputLabel htmlFor="paymethod">Payment Method</InputLabel>
          <SelectField identifier="select-money" label="E-Money" />
          <SelectField
            identifier="select-cash"
            label="Cash on delivery"
            margin
          />
          <Subscribe to={[Checkout]}>
            {(checkout: Checkout) =>
              checkout.state.boolInputs.formPaymentMethod === "select-money" ? (
                <>
                  <InputField identifier="emoney" label="e-Money Number" />
                  <InputField
                    identifier="emoney-pin"
                    label="e-Money PIN"
                    type="password"
                  />
                </>
              ) : null
            }
          </Subscribe>
        </Fieldset>
      </form>
    </Container>
  );
};

export default CheckoutForm;
