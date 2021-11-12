import styled from "styled-components";
import images from "../../data/images";
import { ProductPrice as Price } from "../shopping_cart/styles";

export const ProductPrice = Price;
export { ProductInfo, ProductName } from "../shopping_cart/styles";
export { PriceName } from "../checkout_summary/styles";

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 32px;
  position: absolute;
  z-index: 12;
  top: 224px;
  left: 24px;
  right: 24px;
  border-radius: 8px;
`;

export const CheckedCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  position: relative;
  background: ${({ theme }) => theme.colors.brown};
`;

export const CheckIcon = styled.img.attrs(() => ({ src: images.iconPipe }))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ThankTitle = styled.h2`
  ${({ theme }) => theme.fonts.h5};
  width: 100%;
  margin-top: 23px;
`;

export const OrderInfo = styled.p`
  ${({ theme }) => theme.fonts.body};
  width: 100%;
  margin-top: 16px;
`;

export const SummaryContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray};
  margin-top: 24px;
`;

export const Summary = styled.div`
  width: 100%;
  padding: 24px 24px 0 24px;
`;

export const OtherLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grayLine};
  margin: 12px 0;
`;

export const OtherItems = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  font-weight: 500;
`;

export const GrandTotalContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  margin-top: 25px;
  padding: 15px 24px 19px 24px;
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

export const GrandTotalTitle = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.body};
  text-align: left;
  text-transform: uppercase;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.gray};
`;

export const GrandTotalNum = styled.span`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.white};
  display: block;
  font-weight: 700;
  margin-top: 8px;
`;
