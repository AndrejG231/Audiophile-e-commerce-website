import styled from "styled-components";
import images from "../../data/images";
import { ButtonColor } from "../buttons";

// Navbar
export const Container = styled.header`
  background: ${({ theme }) => theme.colors.black};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 167px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: bottom center;
  width: 100%;
  height: 100%;
`;

export const NewProductArea = styled.div`
  margin: auto;
  margin-top: 110px;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 126px;
  }
`;

export const NewProductAnnounce = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.overline};
  color: ${({ theme }) => theme.colors.grayLine};
  text-align: center;
  height: 19px;
`;

export const NewProductTitle = styled.h1`
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: 15px;
  font-size: 36px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

export const NewProductDetail = styled.p`
  ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.grayLine};
  margin: auto;
  font-weight: 200;
  letter-spacing: 0px;
  text-transform: none;
  font-size: 15px;
  height: 80px;
  margin-top: 20px;
  text-align: center;
  max-width: 350px;
  padding-left: 13px;
  padding-right: 13px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    font-weight: 400;
    padding: 0;
    margin-top: 24px;
  }
`;

export const SeeProductButton = styled(ButtonColor)`
  margin-top: 25px;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.brown};
  &:hover {
    background: ${({ theme }) => theme.colors.lightBrown};
  }
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 40px;
  }
`;
