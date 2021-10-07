import React from "react";
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

class SelectCategory extends React.PureComponent<SelectCategoryProps> {
  render() {
    return (
      <Box>
        <InboxOverlay />
        <ImagePlaceholder src={this.props.image} />
        <CategoryName>{this.props.category}</CategoryName>
        <ArrowButtonContainer>
          <ArrowText>Shop</ArrowText>
          <Arrow />
        </ArrowButtonContainer>
      </Box>
    );
  }
}

export default SelectCategory;
