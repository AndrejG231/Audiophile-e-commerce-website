import React, { FC } from "react";
import { Link } from "react-router-dom";
import images from "../../data/images";
import { routes } from "../../Router";
import {
  Box,
  InboxOverlay,
  ImagePlaceholder,
  CategoryName,
  ArrowButtonContainer,
  ArrowText,
  Arrow,
  OuterContainer,
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

const CategorySelection: FC<{ lower?: boolean }> = ({ lower }) => {
  return (
    <OuterContainer lower={lower}>
      <SelectCategory
        category="headphones"
        image={images.categoryThumbnail.headphones}
      />
      <SelectCategory
        category="speakers"
        image={images.categoryThumbnail.speakers}
      />
      <SelectCategory
        category="earphones"
        image={images.categoryThumbnail.earphones}
      />
    </OuterContainer>
  );
};

export default CategorySelection;
