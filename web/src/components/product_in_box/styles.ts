import styled from "styled-components";

export const Container = styled.div`
  margin: 88px 24px 121px 24px;
`;

export const InTheBoxTitle = styled.h5`
  ${({ theme }) => theme.fonts.h5};
  text-align: left;
  margin-bottom: 24px;
`;

export const BoxContent = styled.ul``;

export const BoxItem = styled.li`
  list-style: none;
  margin: 8px 0;
`;

export const Quantity = styled.span`
  display: inline-block;
  margin-right: 24px;
  ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brown};
  width: 15px;
`;

export const Item = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.body};
  font-weight: 500;
`;
