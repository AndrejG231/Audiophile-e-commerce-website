import styled from "styled-components";
import { ButtonColor } from "../buttons";

export const ProductContainer = styled.div`
  margin: 64px 24px 120px 24px;
  position: relative;
`;

export const ProductImage = styled.div<{
  img: { mobile: string; tablet: string; desktop: string };
}>`
  background: url(${({ img }) => img.mobile});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  height: 352px;
  margin-bottom: 32px;
`;

export const NewProductNotify = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.overline}
  margin-bottom: 24px;
  text-align: center;
`;

export const ProductName = styled.h3`
  ${({ theme }) => theme.fonts.h4}
  margin: 24px 6px;
  text-align: center;
`;

export const ProductDesc = styled.p`
  ${({ theme }) => theme.fonts.body};
  text-align: center;
  margin: 24px 10px;
  font-weight: 200;
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
