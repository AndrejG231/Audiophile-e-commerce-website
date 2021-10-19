import images from "../../data/images";
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
  cursor: pointer;
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
  z-index: 11;
  position: relative;
`;

export const NavUnderline = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grayLine};
`;

export const NavContainer = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 32px;
  padding-bottom: 35px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const NavCover = styled.div<{ cover: boolean }>`
  width: 100%;
  background: ${({ cover }) => (cover ? "rgba(0, 0, 0, 0.5)" : "transparent")};
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: ${({ cover }) => (cover ? "10" : "0")};
`;
