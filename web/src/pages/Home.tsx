import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import images from "../data/images.json";

const Box = styled.div`
  height: 220px;
  margin: 8px 24px 0px 24px;
  position: relative;
`;

const InboxOverlay = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  margin-top: 55px;
  height: 165px;
  position: absolute;
  border-radius: 5px;
`;

const ImagePlaceholder = styled.img`
  position: relative;
  margin: auto;
  height: 70%;
  left: 50%;
  transform: translateX(-50%);
`;

type SpacerProps = {
  width?: number;
  height?: number;
};

const Spacer = styled.div<SpacerProps>`
  position: relative;
  width: ${({ width }) => width ?? 0}px;
  height: ${({ height }) => height ?? 0}px;
`;

export const ArrowButtonContainer = styled.button`
  position: relative;
  outline: none;
  border: none;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayLine};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 13px;
  place-items: center;
  margin: auto;
  height: 13px;
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

const Arrow = styled.img.attrs(() => ({
  src: images.arrowIcon,
}))`
  height: 10px;
`;

const ArrowText = styled.span`
  display: block;
  text-align: center;
  ${({ theme }) => theme.fonts.subtitle};
  font-size: 13px;
  color: inherit;
`;

const CategoryName = styled.span`
  position: relative;
  text-align: center;
  display: block;
  ${({ theme }) => theme.fonts.subtitle};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

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

// Main
class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Spacer height={32} />
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
      </>
    );
  }
}

export default Home;
