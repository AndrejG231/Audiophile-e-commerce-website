import React, { useState } from "react";
import styled from "styled-components";
import CheckoutForm from "../components/checkout_form";
import CheckoutSummary from "../components/checkout_summary";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar";
import { BackButton } from "../components/product_main_container/styles";

const GoBack = styled(BackButton)`
  margin-top: 16px;
`;

const PaddingBox = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

const Checkout = () => {
  return (
    <>
      <Navbar />
      <PaddingBox>
        <GoBack>Go back</GoBack>
        <CheckoutForm />
        <CheckoutSummary />
      </PaddingBox>
      <Footer />
    </>
  );
};

export default Checkout;
