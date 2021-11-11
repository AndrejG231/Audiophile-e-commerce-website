import styled from "styled-components";
import { ButtonColor } from "../buttons";

import { ProductPrice as Price } from "../shopping_cart/styles";

export { ProductInfo, ProductName } from "../shopping_cart/styles";
export const ProductPrice = Price;

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 32px 24px 32px 24px;
  margin-top: 32px;
`;

export const SummaryTitle = styled.h2`
  ${({ theme }) => theme.fonts.h6};
  text-align: left;
  width: 50%;
  margin-bottom: 32px;
`;

export const ItemList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 24px;
`;

export const Item = styled.div`
  display: grid;
  height: 64px;
  width: 100%;
  grid-template-columns: 64px auto 20px;
`;

export const ItemImage = styled.img`
  width: 64px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
`;

export const ProductCount = styled(ProductPrice)`
  text-align: right;
  margin-top: 7px;
`;

export const PriceLine = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
`;

export const Prices = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`;

export const GrandTotal = styled(PriceLine)`
  margin-top: 24px;
`;

export const PriceName = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.body};
  text-align: left;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grayLine};
`;

export const PriceNum = styled.span<{ grand?: boolean }>`
  ${({ theme }) => theme.fonts.h6}
  text-align: right;
  display: block;
  font-weight: 700;
  color: ${({ theme, grand }) =>
    grand ? theme.colors.brown : theme.colors.black};
`;

export const ContinueButton = styled(ButtonColor)`
  width: 100%;
  background: ${({ theme }) => theme.colors.brown};
  margin-top: 32px;
  &:hover {
    background: ${({ theme }) => theme.colors.lightBrown};
  }
`;
