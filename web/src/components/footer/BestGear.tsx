import React from "react";
import styled from "styled-components";
import images from "../../data/images";

const GearContainer = styled.div`
  position: relative;
  min-height: 700px;
  background: transparent;
  margin: 0 24px 0 24px;
  margin-top: 120px;
  padding-bottom: 15px;
`;

const GearImage = styled.img.attrs(() => ({
  src: images.mobile.bestGear,
}))`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
`;

const GearTitle = styled.span`
  position: relative;
  display: block;
  ${({ theme }) => theme.fonts.h4};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 40px;
  letter-spacing: 1px;
`;

const WordHiglight = styled.span`
  color: ${({ theme }) => theme.colors.brown};
`;

const GearDesc = styled.p`
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.grayLine};
  font-weight: 200;
  text-align: center;
  margin-top: 32px;
  line-height: 25px;
`;

const BestGear = () => {
  return (
    <GearContainer>
      <GearImage />
      <GearTitle>
        Bringing you the <WordHiglight>best</WordHiglight> audio gear
      </GearTitle>
      <GearDesc>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </GearDesc>
    </GearContainer>
  );
};

export default BestGear;
