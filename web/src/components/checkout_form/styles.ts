import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 24px 24px 32px 24px;
`;

export const CheckoutTitle = styled.h1`
  ${({ theme }) => theme.fonts.h4};
  margin-left: 1px;
  margin-bottom: 32px;
`;

export const Fieldset = styled.fieldset`
  display: block;
  margin-top: 8px;
  outline: none;
  border: none;
`;

export const Legend = styled.legend`
  ${({ theme }) => theme.fonts.subtitle};
  margin-bottom: 16px;
`;
