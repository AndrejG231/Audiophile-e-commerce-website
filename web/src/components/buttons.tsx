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

export const ArrowButtonContainer = styled.button`
  position: relative;
  outline: none;
  border: none;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayLine};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 13px;
  place-items: center;
  margin: auto;
  height: 13px;
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;
