import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../buttons";
import images from "../../data/images";

const ProductSpeakerBox = styled.div`
  position: relative;
  height: 320px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin: 0 24px 0 24px;
  overflow: hidden;
  margin-top: 24px;
`;

const ZX7Image = styled.img.attrs(() => ({
  src: images.mobile.speakerZX7,
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  object-fit: cover;
  object-position: right;
`;

const ProductSpeakerTitle = styled.span`
  position: relative;
  display: block;
  ${({ theme }) => theme.fonts.h4};
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 100px;
  margin-left: 24px;
  padding-right: 10px;
`;

const SeeProductButton = styled(ButtonColor)`
  display: block;
  position: relative;
  margin-top: 24px;
  margin-left: 24px;
  background: transparent;
  outline: 1px solid black;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
  /* Hide speaker under button (very small screen fix) */
  @media screen and (max-width: 320px) {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

// Component

const ZX7ProductView = () => {
  return (
    <ProductSpeakerBox>
      <ZX7Image />
      <ProductSpeakerTitle>ZX7 SPEAKER</ProductSpeakerTitle>
      <SeeProductButton>see product</SeeProductButton>
    </ProductSpeakerBox>
  );
};

export default ZX7ProductView;
