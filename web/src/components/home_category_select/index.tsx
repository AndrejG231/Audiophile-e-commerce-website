import React from "react";
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

class SelectCategory extends React.PureComponent<SelectCategoryProps> {
  render() {
    return (
      <Box>
        <InboxOverlay />
        <ImagePlaceholder src={this.props.image} />
        <CategoryName>{this.props.category}</CategoryName>
        <Link to={routes.category(this.props.category)}>
          <ArrowButtonContainer>
            <ArrowText>Shop</ArrowText>
            <Arrow />
          </ArrowButtonContainer>
        </Link>
      </Box>
    );
  }
}

export default SelectCategory;
