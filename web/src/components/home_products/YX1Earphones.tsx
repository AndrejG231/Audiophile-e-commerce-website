import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../buttons";
import images from "../../data/images";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../../states/ScreenQuery";

const ProductContainer = styled.div`
  position: relative;
  background: transparent;
  border-radius: 8px;
  margin: 24px 24px 0 24px;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    display: grid;
    margin: 32px 40px 0 40px;
    grid-template-columns: 1fr 1fr;
    gap: 11px;
  }
`;

const ProductImage = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0;
    min-height: 320px;
    height: 100%;
  }
`;

const ProductInfoBox = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin: 0;
  margin-top: 20px;
  padding: 40px 24px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0;
    padding: 101px 40px;
  }
`;

const ProductSpeakerTitle = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.h4};
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

const SeeProductButton = styled(ButtonColor)`
  display: block;
  position: relative;
  margin-top: 32px;
  background: transparent;
  outline: 1px solid black;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

// Component
const YX1Earphones = () => {
  return (
    <ProductContainer>
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => (
          <ProductImage src={images.earphonesYX1[query.state.mediaQuery]} />
        )}
      </Subscribe>
      <ProductInfoBox>
        <ProductSpeakerTitle>YX1 EARPHONES</ProductSpeakerTitle>
        <SeeProductButton>see product</SeeProductButton>
      </ProductInfoBox>
    </ProductContainer>
  );
};

export default YX1Earphones;
