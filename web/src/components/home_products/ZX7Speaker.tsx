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
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin: 24px 24px 0 24px;
  overflow: hidden;
  padding: 101px 24px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    padding: 101px 62px;
    margin: 32px 40px 0 40px;
  }
`;

const ZX7Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  object-fit: cover;
  object-position: right;
  top: 0;
  left: 0;
`;

const ProductSpeakerTitle = styled.span`
  position: relative;
  display: block;
  ${({ theme }) => theme.fonts.h4};
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  padding-right: 10px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}) {
    margin-left: 62px;
  }
`;

const SeeProductButton = styled(ButtonColor)`
  display: block;
  position: relative;
  margin-top: 24px;
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
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 32px;
  }
`;

// Component

const ZX7ProductView = () => {
  const { push } = useHistory();
  return (
    <ProductSpeakerBox>
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => (
          <ZX7Image src={images.speakerZX7[query.state.mediaQuery]} />
        )}
      </Subscribe>
      <ProductSpeakerTitle>ZX7 SPEAKER</ProductSpeakerTitle>
      <SeeProductButton onClick={() => push(routes.product("zx7-speaker"))}>
        see product
      </SeeProductButton>
    </ProductSpeakerBox>
  );
};

export default ZX7ProductView;
