import styled from "styled-components";

export type SpacerProps = {
  width?: number;
  height?: number;
};

export const Spacer = styled.div<SpacerProps>`
  position: relative;
  width: ${({ width }) => width ?? 0}px;
  height: ${({ height }) => height ?? 0}px;
`;
