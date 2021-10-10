import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../buttons";
import images from "../../data/images";

const ProductContainer = styled.div`
  position: relative;
  min-height: 420px;
  background: transparent;
  border-radius: 8px;
  margin: 0 24px 0 24px;
  overflow: hidden;
  margin-top: 24px;
`;

const ProductImage = styled.img.attrs(() => ({
  src: images.mobile.earphonesYX1,
}))`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfoBox = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  height: 200px;
  margin: 0;
  margin-top: 20px;
  padding: 40px 24px;
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
class YX1Earphones extends React.PureComponent {
  render() {
    return (
      <ProductContainer>
        <ProductImage />
        <ProductInfoBox>
          <ProductSpeakerTitle>YX1 EARPHONES</ProductSpeakerTitle>
          <SeeProductButton>see product</SeeProductButton>
        </ProductInfoBox>
      </ProductContainer>
    );
  }
}

export default YX1Earphones;
