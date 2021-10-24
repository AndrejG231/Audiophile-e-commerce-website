import React from "react";
import styled from "styled-components";
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
        {/* Checkout form */}
        {/* Summarry */}
      </PaddingBox>
      <Footer />
    </>
  );
};

export default Checkout;
