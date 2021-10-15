import styled from "styled-components";
import {
  ProductContainer,
  ProductName,
  SeeProductButton,
} from "../category_product_display/styles";

import {
  NewProductNotify,
  ProductImage,
} from "../category_product_display/styles";

export const BackButton = styled.button`
  position: relative;
  ${({ theme }) => theme.fonts.body};
  outline: none;
  background: transparent;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }
`;

export const Image = styled(ProductImage)`
  height: 327px;
  margin-top: 24px;
  margin-bottom: 32px;
  width: 100%;
`;

export const Container = styled(ProductContainer)`
  margin-top: 16px;
`;

export const NewProduct = styled(NewProductNotify)`
  text-align: left;
`;
export const Name = styled(ProductName)`
  margin: 24px 0;
  text-align: left;
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.body};
  margin: 24px 0px;
`;

export const Price = styled.span`
  display: block;
  margin: 24px 0;
  ${({ theme }) => theme.fonts.h6};
`;

export const AddToCardContainer = styled.div`
  margin-top: 24px;
  max-width: 100%;
`;

export const QuantitySelect = styled.div`
  padding: 15px 15.5px;
  background: ${({ theme }) => theme.colors.gray};
  width: 120px;
  display: inline-block;
  height: 48px;
  margin: 0;
  margin-right: 16px;
`;

export const QuantityChangeSymbol = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.subtitile};
  color: ${({ theme }) => theme.colors.grayLine};
  line-height: 18px;
  cursor: pointer;
  width: 16px;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export const QuantityNumber = styled.span`
  display: inline-block;
  margin: auto 20.5px;
  ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.black};
  line-height: 18px;
  width: 16px;
`;

export const AddToCartButton = styled(SeeProductButton)`
  display: inline-block;
  position: relative;
  margin: 0;
  width: 160px;
  height: 48px;
`;
