import styled from "styled-components";

export const ButtonColor = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1px;
  padding: 15px 30px;
  height: 48px;
  width: 160px;
  padding: 0;
  line-height: 48px;
`;
