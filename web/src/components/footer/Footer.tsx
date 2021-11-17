import styled from "styled-components";
import images from "../../data/images";
import React from "react";
import { useHistory } from "react-router";
import { routes } from "../../Router";

const Box = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.lightBlack};
  width: 100%;
  margin-top: 120px;
  padding-bottom: 38px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 96px;
    padding: 0 40px 46px 40px;
  }
`;

const TopLine = styled.div`
  width: 101px;
  height: 4px;
  background: ${({ theme }) => theme.colors.brown};
  margin: auto;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0;
  }
`;

export const Logo = styled.div`
  width: 143px;
  height: 24.5px;
  background: url(${images.logo});
  margin: auto;
  margin-top: 48px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0;
    margin-top: 56px;
  }
`;

const NavContainer = styled.nav`
  width: 108px;
  margin: auto;
  margin-top: 48px;
  display: grid;
  gap: 16px;
  grid-template-columns: 100%;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0;
    margin-top: 32px;
    grid-template-columns: auto auto auto auto;
    gap: 34px;
  }
`;

const NavItem = styled.span`
  display: block;
  margin: auto;
  ${({ theme }) => theme.fonts.subtitle};
  text-align: center;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: min-content;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightBrown};
  }
`;

const AudiophileDesc = styled.p`
  ${({ theme }) => theme.fonts.body};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.grayLine};
  margin: 48px 24px 0 24px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    font-weight: 500;
    text-align: left;
    margin: 0;
    margin-top: 32px;
  }
`;

const CopyrightClaim = styled.span`
  display: block;
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.grayLine};
  margin-top: 48px;
  letter-spacing: 0px;
  text-align: center;
  font-weight: 700;
  padding: 0px 10px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    padding: 0;
    margin: 80px 0 0 0;
    text-align: left;
  }
`;

const SocialIconsBar = styled.div`
  height: 24px;
  width: 104px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  margin-top: 48px;
  gap: 16px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    padding: 0;
    margin: 80px auto 0 0;
    position: absolute;
    bottom: 46px;
    right: 40px;
  }
`;

const SocialIcon = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  object-fit: contain;
`;

const Footer = () => {
  const nav = useHistory();
  return (
    <Box>
      <TopLine />
      <Logo />
      <NavContainer>
        <NavItem onClick={() => nav.push(routes.home)}>home</NavItem>
        <NavItem onClick={() => nav.push(routes.category("headphones"))}>
          headphones
        </NavItem>
        <NavItem onClick={() => nav.push(routes.category("speakers"))}>
          speakers
        </NavItem>
        <NavItem onClick={() => nav.push(routes.category("earphones"))}>
          earphones
        </NavItem>
      </NavContainer>
      <AudiophileDesc>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </AudiophileDesc>
      <CopyrightClaim>Copyright 2021. All Rights Reserved</CopyrightClaim>
      <SocialIconsBar>
        <SocialIcon src={images.iconFacebook} />
        <SocialIcon src={images.iconTwitter} />
        <SocialIcon src={images.iconInstagram} />
      </SocialIconsBar>
    </Box>
  );
};

export default Footer;
