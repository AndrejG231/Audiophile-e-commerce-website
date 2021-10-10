import React, { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Router";
import {
  Box,
  InboxOverlay,
  ImagePlaceholder,
  CategoryName,
  ArrowButtonContainer,
  ArrowText,
  Arrow,
} from "./styles";

type SelectCategoryProps = { category: string; image: string };

const SelectCategory: FC<SelectCategoryProps> = ({ image, category }) => {
  return (
    <Box>
      <InboxOverlay />
      <ImagePlaceholder src={image} />
      <CategoryName>{category}</CategoryName>
      <Link to={routes.category(category)}>
        <ArrowButtonContainer>
          <ArrowText>Shop</ArrowText>
          <Arrow />
        </ArrowButtonContainer>
      </Link>
    </Box>
  );
};

export default SelectCategory;
