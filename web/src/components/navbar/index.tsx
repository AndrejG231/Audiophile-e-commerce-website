import {
  NavbarContainer,
  Bar,
  NavButton,
  Logo,
  CartButton,
  NavUnderline,
} from "./styles";
import React from "react";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Bar>
          <NavButton />
          <Logo />
          <CartButton />
        </Bar>
      </NavbarContainer>
      <NavUnderline />
    </>
  );
};

export default Navbar;
