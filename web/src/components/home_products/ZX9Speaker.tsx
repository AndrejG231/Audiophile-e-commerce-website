import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../buttons";
import images from "../../data/images";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../../states/ScreenQuery";
import { routes } from "../../Router";
import { useHistory } from "react-router-dom";

const ProductSpeakerBox = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.brown};
  border-radius: 8px;
  margin: 120px 24px 0 24px;
  overflow: hidden;
  padding-top: 55px;
  padding-bottom: 55px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    padding-top: 52px;
    padding-bottom: 64px;
    margin: 96px 40px 0 40px;
  }
`;

const CircleBackground = styled.img.attrs(() => ({
  src: images.circlePattern,
}))`
  width: 555px;
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    width: 944px;
    top: -268px;
  }
`;

const ZX9Image = styled.img`
  position: relative;
  width: 172px;
  display: block;
  margin: auto;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    width: 197px;
  }
`;

const ProductSpeakerTitle = styled.span`
  display: block;
  text-align: center;
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.25rem;
  line-height: 2.5rem;
  letter-spacing: 1.29px;
  margin-top: 35px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 64px;
    font-size: 2.5rem;
    line-height: 3.5rem;
    letter-spacing: 2px;
  }
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
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 40px;
  }
`;

// Component

const ZX9ProductView = () => {
  const { push } = useHistory();
  return (
    <ProductSpeakerBox>
      <CircleBackground />
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => (
          <ZX9Image src={images.speakerZX9[query.state.mediaQuery]} />
        )}
      </Subscribe>
      <ProductSpeakerTitle>
        ZX9
        <br />
        SPEAKER
      </ProductSpeakerTitle>
      <ProductSpeakerDetail>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </ProductSpeakerDetail>
      <SeeProductButton onClick={() => push(routes.product("zx9-speaker"))}>
        see product
      </SeeProductButton>
    </ProductSpeakerBox>
  );
};

export default ZX9ProductView;
