import styled from "styled-components";
import images from "../../data/images.json";

export const Box = styled.div`
  height: 220px;
  margin: 8px 24px 0px 24px;
  position: relative;
`;

export const InboxOverlay = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  margin-top: 55px;
  height: 165px;
  position: absolute;
  border-radius: 5px;
`;

export const ImagePlaceholder = styled.img`
  position: relative;
  margin: auto;
  height: 70%;
  left: 50%;
  transform: translateX(-50%);
`;

export type SpacerProps = {
  width?: number;
  height?: number;
};

export const Spacer = styled.div<SpacerProps>`
  position: relative;
  width: ${({ width }) => width ?? 0}px;
  height: ${({ height }) => height ?? 0}px;
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

export const Arrow = styled.img.attrs(() => ({
  src: images.arrowIcon,
}))`
  height: 10px;
`;

export const ArrowText = styled.span`
  display: block;
  text-align: center;
  ${({ theme }) => theme.fonts.subtitle};
  font-size: 13px;
  color: inherit;
`;

export const CategoryName = styled.span`
  position: relative;
  text-align: center;
  display: block;
  ${({ theme }) => theme.fonts.subtitle};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
`;
