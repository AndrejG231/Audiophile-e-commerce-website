import React, { FC } from "react";
import styled from "styled-components";

import { InTheBoxTitle } from "../product_in_box/styles";

type props = {
  features: string;
};

const Container = styled.div`
  margin: 88px 24px 88px 24px;
`;

const Features = styled.p`
  margin-top: 24px;
  ${({ theme }) => theme.fonts.body};
  white-space: pre-line;
`;

const ProductFeatures: FC<props> = ({ features }) => {
  return (
    <Container>
      <InTheBoxTitle>Features</InTheBoxTitle>
      <Features>{features}</Features>
    </Container>
  );
};

export default ProductFeatures;
