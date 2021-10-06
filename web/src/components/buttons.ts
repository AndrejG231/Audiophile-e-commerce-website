import styled from "styled-components";

export const ButtonColor = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.brown};
  ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1px;
  padding: 15px 30px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.lightBrown};
  }
`;
