import React, { useState } from "react";
import styled from "styled-components";
import CheckoutForm from "../components/checkout_form";
import CheckoutSummary from "../components/checkout_summary";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar";
import { BackButton } from "../components/product_main_container/styles";
import { Route } from "react-router-dom";
import { routes } from "../Router";
import CheckoutModal from "../components/checkout_modal";
import { goHomeId } from "../constants";

const GoBack = styled(BackButton)`
  margin-top: 16px;
`;

const PaddingBox = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

const PageCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Checkout = () => {
  return (
    <>
      <Route path={routes.finishedOrder}>
        <PageCover
          onClick={() => {
            const el = document.getElementById(goHomeId);
            if (el) {
              window.scrollTo({ top: 200 });
            }
          }}
        />
        <CheckoutModal />
      </Route>
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
