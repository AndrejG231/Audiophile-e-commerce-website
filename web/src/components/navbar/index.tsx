import {
  NavbarContainer,
  Bar,
  NavButton,
  Logo,
  CartButton,
  NavUnderline,
} from "./styles";
import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const nav = useHistory();
  return (
    <>
      <NavbarContainer>
        <Bar>
          <NavButton />
          <Logo onClick={() => nav.push("/")} />
          <CartButton />
        </Bar>
      </NavbarContainer>
      <NavUnderline />
    </>
  );
};

export default Navbar;
