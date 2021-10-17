import styled from "styled-components";
import { SeeProductButton } from "../category_product_display/styles";

export const CommonProductsTitle = styled.h5`
  ${({ theme }) => theme.fonts.h5};
  text-align: center;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  margin: 0px 24px 56px 24px;
`;

export const Title = styled.h6`
  ${({ theme }) => theme.fonts.h5};
  margin-top: 32px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled(SeeProductButton)`
  margin-top: 32px;
`;
