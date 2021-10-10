import React from "react";
import {
  Container,
  NewProductArea,
  NewProductAnnounce,
  NewProductTitle,
  NewProductDetail,
  SeeProductButton,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <NewProductArea>
        <NewProductAnnounce>New product</NewProductAnnounce>
        <NewProductTitle>
          XX99 Mark II
          <br /> Headphones
        </NewProductTitle>
        <NewProductDetail>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </NewProductDetail>
        <SeeProductButton>See product</SeeProductButton>
      </NewProductArea>
    </Container>
  );
};

export default Header;
