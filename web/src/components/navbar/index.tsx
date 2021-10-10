import {
  NavbarContainer,
  Bar,
  NavButton,
  Logo,
  CartButton,
  NavUnderline,
} from "./styles";
import React from "react";

class Navbar extends React.PureComponent {
  render() {
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
  }
}

export default Navbar;
