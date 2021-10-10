import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../buttons";
import images from "../../data/images";

const ProductSpeakerBox = styled.div`
  position: relative;
  height: 600px;
  background: ${({ theme }) => theme.colors.brown};
  border-radius: 8px;
  margin: 0 24px 0 24px;
  overflow: hidden;
  margin-top: 120px;
`;

const CircleBackground = styled.img.attrs(() => ({
  src: images.circlePattern,
}))`
  width: 555px;
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
`;

const ZX9Image = styled.img.attrs(() => ({
  src: images.mobile.speakerZX9,
}))`
  position: relative;
  width: 172px;
  display: block;
  margin: auto;
  margin-top: 55px;
`;

const ProductSpeakerTitle = styled.span`
  display: block;
  text-align: center;
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.29px;
  margin-top: 35px;
  height: 80px;
`;

const ProductSpeakerDetail = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.white};
  margin: auto;
  margin-top: 24px;
  line-height: 25px;
  font-weight: 200;
  max-width: 300px;
  padding: 0 10px;
`;

const SeeProductButton = styled(ButtonColor)`
  display: block;
  margin: auto;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.black};
  &:hover {
    background: ${({ theme }) => theme.colors.grayLine};
  }
`;

// Component

const ZX9ProductView = () => {
  return (
    <ProductSpeakerBox>
      <CircleBackground />
      <ZX9Image />
      <ProductSpeakerTitle>
        ZX9
        <br />
        SPEAKER
      </ProductSpeakerTitle>
      <ProductSpeakerDetail>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </ProductSpeakerDetail>
      <SeeProductButton>see product</SeeProductButton>
    </ProductSpeakerBox>
  );
};

export default ZX9ProductView;
