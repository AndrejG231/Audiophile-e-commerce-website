import styled from "styled-components";
import images from "../../data/images.json";
import { ButtonColor } from "../buttons";

// Navbar
export const Container = styled.header`
  background: ${({ theme }) => theme.colors.black};
  background: url(${images.mobile.header}), black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 100px;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 88px;
  padding-top: 32.5px;
  background: ${({ theme }) => theme.colors.black};
`;

export const Navbar = styled.nav`
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
`;

export const NavUnderline = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grayLine};
`;

export const NewProductArea = styled.div`
  margin: auto;
  margin-top: 110px;
  height: 290px;
  position: relative;
`;

export const NewProductAnnounce = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.overline};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  height: 19px;
`;

export const NewProductTitle = styled.h1`
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: 15px;
  height: 80px;
  font-size: 36px;
`;

export const NewProductDetail = styled.p`
  ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  margin: auto;
  font-weight: 200;
  letter-spacing: 0px;
  text-transform: none;
  font-size: 15px;
  height: 80px;
  margin-top: 20px;
  text-align: center;
  max-width: 328px;
`;

export const SeeProductButton = styled(ButtonColor)`
  margin-top: 25px;
  margin-left: 50%;
  transform: translateX(-50%);
`;
