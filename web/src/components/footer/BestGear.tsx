import React from "react";
import styled from "styled-components";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../../states/ScreenQuery";
import images from "../../data/images";

const GearContainer = styled.aside`
  position: relative;
  min-height: 700px;
  background: transparent;
  margin: 120px 24px 0 24px;
  padding-bottom: 15px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 96px 40px 0 40px;
  }
`;

const GearImage = styled.img`
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
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 63px 38px 0 38px;
    ${({ theme }) => theme.fonts.h2};
  }
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
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    ${({ theme }) => theme.fonts.body};
    margin: 32px 48px 0 48px;
    font-weight: 500;
  }
`;

const BestGear = () => {
  return (
    <GearContainer>
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => (
          <GearImage src={images.bestGear[query.state.mediaQuery]} />
        )}
      </Subscribe>
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
