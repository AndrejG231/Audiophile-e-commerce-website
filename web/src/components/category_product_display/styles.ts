import styled from "styled-components";
import { ButtonColor } from "../buttons";

export const ProductContainer = styled.div`
  margin: 64px 24px 120px 24px;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 120px 40px;
  }
`;

export const ProductImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
  height: 352px;
  margin-bottom: 32px;
  width: 100%;
`;

export const NewProductNotify = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.overline}
  margin-bottom: 24px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-bottom: 16px;
  }
`;

export const ProductName = styled.h3`
  ${({ theme }) => theme.fonts.h4}
  margin: 24px 6px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0 100px 32px 100px;
    ${({ theme }) => theme.fonts.h2};
  }
`;

export const ProductDesc = styled.p`
  ${({ theme }) => theme.fonts.body};
  text-align: center;
  margin: 24px 10px;
  font-weight: 200;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0 100px 24px 100px;
    ${({ theme }) => theme.fonts.body};
  }
`;

export const SeeProductButton = styled(ButtonColor)`
  display: block;
  margin: auto;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background: ${({ theme }) => theme.colors.lightBrown};
  }
`;
