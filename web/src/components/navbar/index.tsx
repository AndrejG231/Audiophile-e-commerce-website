import { NavbarContainer, Bar, NavButton, Logo, CartButton } from "./styles";
import React from "react";

class Navbar extends React.PureComponent {
  render() {
    return (
      <NavbarContainer>
        <Bar>
          <NavButton />
          <Logo />
          <CartButton />
        </Bar>
      </NavbarContainer>
    );
  }
}

export default Navbar;
