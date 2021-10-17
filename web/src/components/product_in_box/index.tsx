import React, { FC } from "react";

import styled from "styled-components";
import {
  BoxContent,
  BoxItem,
  Container,
  InTheBoxTitle,
  Item,
  Quantity,
} from "./styles";

type props = {
  contents: { quantity: number; item: string }[];
};

const ProductInBox: FC<props> = ({ contents }) => {
  return (
    <Container>
      <InTheBoxTitle>in the box</InTheBoxTitle>
      <BoxContent>
        {contents.map((item, index) => (
          <BoxItem key={index}>
            <Quantity>{item.quantity}x</Quantity>
            <Item>{item.item}</Item>
          </BoxItem>
        ))}
      </BoxContent>
    </Container>
  );
};

export default ProductInBox;
