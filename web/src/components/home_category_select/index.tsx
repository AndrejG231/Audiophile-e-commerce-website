import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Subscribe } from "unstated";
import images from "../../data/images";
import { routes } from "../../Router";
import DisplayStates from "../../states/DisplayStates";
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
  const nav = useHistory();
  return (
    <Box>
      <InboxOverlay />
      <ImagePlaceholder src={image} />
      <CategoryName>{category}</CategoryName>
      <Subscribe to={[DisplayStates]}>
        {(states: DisplayStates) => (
          <ArrowButtonContainer
            onClick={() => {
              states.closeAll();
              nav.push(routes.category(category));
            }}
          >
            <ArrowText>Shop</ArrowText>
            <Arrow />
          </ArrowButtonContainer>
        )}
      </Subscribe>
    </Box>
  );
};

const CategorySelection: FC<{ lower?: boolean; nav?: boolean }> = (props) => {
  return (
    <OuterContainer {...props}>
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
