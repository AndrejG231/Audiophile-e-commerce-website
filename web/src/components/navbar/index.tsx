import {
  NavbarContainer,
  Bar,
  NavButton,
  Logo,
  CartButton,
  NavUnderline,
  NavContainer,
  NavCover,
} from "./styles";
import React from "react";
import { useHistory } from "react-router-dom";
import { Subscribe } from "unstated";
import DisplayStates from "../../states/DisplayStates";
import CategorySelection from "../home_category_select";

const Navbar = () => {
  const nav = useHistory();
  return (
    <>
      <NavbarContainer>
        <Subscribe to={[DisplayStates]}>
          {(display: DisplayStates) => (
            <Bar>
              <NavButton onClick={display.toggleNavbar} />
              <Logo
                onClick={async () => {
                  await display.closeAll();
                  nav.push("/");
                }}
              />
              <CartButton onClick={display.toggleCart} />
            </Bar>
          )}
        </Subscribe>
      </NavbarContainer>
      <Subscribe to={[DisplayStates]}>
        {(display: DisplayStates) =>
          display.state.navbar ? (
            <>
              <NavContainer>
                <CategorySelection />
              </NavContainer>
            </>
          ) : (
            <NavUnderline />
          )
        }
      </Subscribe>
    </>
  );
};

export const NavbarCover = () => {
  return (
    <Subscribe to={[DisplayStates]}>
      {(display: DisplayStates) => (
        <NavCover
          cover={display.state.navbar || display.state.shoppingCart}
          onClick={display.closeAll}
        />
      )}
    </Subscribe>
  );
};

export default Navbar;
