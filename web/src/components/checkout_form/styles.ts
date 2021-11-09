import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 24px 24px 0px 24px;
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

export const InputLabel = styled.label`
  display: block;
  ${({ theme }) => theme.fonts.manrope};
  font-size: 0.75rem;
  margin-bottom: 1px;
  font-weight: 700;
`;

export const RadioContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  padding-left: 24px;
`;
