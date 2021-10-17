import React, { FC } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Subscribe } from "unstated";
import products from "../../data/products";
import { routes } from "../../Router";
import { ScreenQuery } from "../../states/ScreenQuery";
import { Button, Container, Title, Image } from "./styles";

type props = typeof products[number]["others"][number];

const ProductCommon: FC<props> = ({ image, name, slug }) => {
  const nav = useHistory();
  return (
    <Container>
      <Subscribe to={[ScreenQuery]}>
        {(query: ScreenQuery) => <Image src={image[query.state.mediaQuery]} />}
      </Subscribe>
      <Title>{name}</Title>
      <Button onClick={() => nav.push(routes.product(slug))}>
        See product
      </Button>
    </Container>
  );
};

export default ProductCommon;
