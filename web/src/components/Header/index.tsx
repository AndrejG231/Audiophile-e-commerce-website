import React from "react";
import { useHistory } from "react-router";
import { routes } from "../../Router";
import {
  Container,
  NewProductArea,
  NewProductAnnounce,
  NewProductTitle,
  NewProductDetail,
  SeeProductButton,
} from "./styles";

const Header = () => {
  const nav = useHistory();

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
        <SeeProductButton
          onClick={() => nav.push(routes.product("xx99-mark-two-headphones"))}
        >
          See product
        </SeeProductButton>
      </NewProductArea>
    </Container>
  );
};

export default Header;
