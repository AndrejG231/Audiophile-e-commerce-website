import React, { FC } from "react";
import products from "../../data/products";
import styled from "styled-components";
import { Subscribe } from "unstated";
import { ScreenQuery } from "../../states/ScreenQuery";

type props = { images: typeof products[number]["gallery"] };

const Container = styled.div`
  margin: 88px 24px 120px 24px;
  display: grid;
  gap: 20px;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 2fr;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
`;

const ProductGallery: FC<props> = ({ images }) => {
  return (
    <Subscribe to={[ScreenQuery]}>
      {(query: ScreenQuery) => (
        <Container>
          <Image src={images.first[query.state.mediaQuery]} />
          <Image src={images.second[query.state.mediaQuery]} />
          <Image src={images.third[query.state.mediaQuery]} />
        </Container>
      )}
    </Subscribe>
  );
};

export default ProductGallery;
