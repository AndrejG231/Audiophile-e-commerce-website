import styled from "styled-components";
import { ButtonColor } from "../buttons";

export const CartContainer = styled.div<{ isDisplayed: boolean }>`
  position: absolute;
  top: 122px;
  left: 24px;
  right: 24px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 32px 28px;
  z-index: 11;
  display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const CartTitle = styled.h2`
  ${({ theme }) => theme.fonts.h6};
  text-align: left;
  width: 50%;
  margin-bottom: 8px;
`;

export const ClearAll = styled.span`
  ${({ theme }) => theme.fonts.body};
  text-align: right;
  margin-left: auto;
  cursor: pointer;
  white-space: pre;
  height: 25px;
  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const CartItemContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 64px auto 96px;
`;

export const ProductImage = styled.img`
  width: 64px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
`;

export const ProductInfo = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  margin-left: 16px;
`;

export const ProductName = styled.span`
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-top: 7px;
`;

export const ProductPrice = styled.span`
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.grayLine};
  font-size: 0.875rem;
  margin-bottom: 7px;
  letter-spacing: 0;
  font-weight: 700;
`;

export const CountChanger = styled.div`
  height: 32px;
  width: 100%;
  margin: auto;
  background: ${({ theme }) => theme.colors.gray};
`;

export const ProductCount = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.subtitle};
  width: 16px;
  margin-top: 7px;
  text-align: center;
  line-height: 18px;
  margin-left: 12px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ProductIncreaseButton = styled(ProductCount)<{ left?: boolean }>`
  color: ${({ theme }) => theme.colors.grayLine};
  ${({ left }) =>
    left
      ? "margin-left: 11.5; margin-right: 0"
      : "margin-left: 0; margin-right: 11.5"};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  margin-top: 32px;
  position: relative;
`;

export const CartTotalText = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.body};
  text-transform: uppercase;
`;

export const CartSum = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.h6};
  position: absolute;
  right: 0;
`;

export const CheckoutButton = styled(ButtonColor)`
  background: ${({ theme }) => theme.colors.brown};
  width: 100%;
  margin-top: 32px;
  &:hover {
    background: ${({ theme }) => theme.colors.lightBrown};
  }
`;
