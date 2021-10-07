import images from "../../data/images.json";
import styled from "styled-components";

export const Bar = styled.nav`
  display: grid;
  position: relative;
  height: 24.5px;
`;

export const NavButton = styled.div`
  width: 16px;
  height: 14.7px;
  background: url(${images.hamburgerIcon});
  position: absolute;
  margin: auto;
  margin-right: auto;
  margin-left: 24px;
  cursor: pointer;
`;

export const Logo = styled.div`
  width: 143px;
  height: 24.5px;
  background: url(${images.logo});
  position: absolute;
  margin: auto;
`;

export const CartButton = styled.div`
  width: 24px;
  height: 19.6px;
  background: url(${images.cartIcon});
  position: absolute;
  margin: auto;
  margin-right: 24px;
  margin-left: auto;
  cursor: pointer;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 88px;
  padding-top: 32.5px;
  background: ${({ theme }) => theme.colors.black};
`;
