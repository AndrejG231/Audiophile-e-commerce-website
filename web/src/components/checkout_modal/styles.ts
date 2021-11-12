import styled from "styled-components";
import images from "../../data/images";

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
