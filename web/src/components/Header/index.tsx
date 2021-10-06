import React from "react";
import {
  Container,
  NavbarContainer,
  Navbar,
  NavButton,
  Logo,
  CartButton,
  NavUnderline,
  NewProductArea,
  NewProductAnnounce,
  NewProductTitle,
  NewProductDetail,
  SeeProductButton,
} from "./styles";

class Header extends React.Component {
  render() {
    return (
      <Container>
        <NavbarContainer>
          <Navbar>
            <NavButton />
            <Logo />
            <CartButton />
          </Navbar>
        </NavbarContainer>
        <NavUnderline />
        <NewProductArea>
          <NewProductAnnounce>New product</NewProductAnnounce>
          <NewProductTitle>
            XX99 Mark II
            <br /> Headphones
          </NewProductTitle>
          <NewProductDetail>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </NewProductDetail>
          <SeeProductButton>See product</SeeProductButton>
        </NewProductArea>
      </Container>
    );
  }
}
export default Header;
