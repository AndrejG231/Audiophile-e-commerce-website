import images from "../../data/images";
import styled from "styled-components";

export const Bar = styled.nav`
  display: grid;
  position: relative;
  height: 24.5px;
`;

export const NavButton = styled.div`
  position: absolute;
  width: 16px;
  height: 14.7px;
  background: url(${images.hamburgerIcon});
  margin: auto;
  margin-right: auto;
  margin-left: 24px;
  cursor: pointer;
`;

export const Logo = styled.div`
  width: 143px;
  height: 24.5px;
  background: url(${images.logo});
  cursor: pointer;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-left: 80px;
    transform: none;
  } ;
`;

export const CartButton = styled.div`
  width: 24px;
  height: 19.6px;
  background: url(${images.cartIcon}) no-repeat;
  margin: auto;
  padding-right: 24px;
  margin-left: 100%;
  transform: translateX(-100%) translate(-24px, 0);
  cursor: pointer;
  position: absolute;
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
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    position: absolute;
    width: calc(100% - 78px);
    margin: 0 39px;
    top: 88px;
    z-index: 10;
  } ;
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
  z-index: 10;
  display: ${({ cover }) => (cover ? "block" : "none")};
`;
